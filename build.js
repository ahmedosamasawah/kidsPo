import {writeFileSync as write, readFileSync, copyFileSync} from 'fs'
import {minify} from 'terser'
import {apply_repls} from 'components/src/util.js'
import pkg from './package.json' with {type: 'json'}

const r = p => readFileSync(p, 'utf8')
const min_js = (s, conf) => minify(s, {module: true, mangle: {module: true}, compress: {module: true, unsafe: false, global_defs: {'window.__DEBUG__': false}}, format: {comments: false}, ...conf})

const BUILD_TIMESTAMP = Date.now()

const pf_url_base = 'https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?version=4.8.0&features='
const pf_features = []
const pf_url = pf_url_base + pf_features.map(pf => pf[0]).join(',')
// const pf_script = `((${pf_features.map(pf => pf[1] || pf[0]).join(' && ')}) || document.write('<script src="${pf_url}"><\\/script>'))`

const service_worker = apply_repls(r('public/sw.js'), [
    ['kids-points-v1', `kids-points-v${BUILD_TIMESTAMP}`],
    ['static-v1', `static-v${BUILD_TIMESTAMP}`],
    ['runtime-v1', `runtime-v${BUILD_TIMESTAMP}`],
])

write('dist/sw.js', service_worker)

const pwa_assets = [
    'manifest.json',
    'icon-72.png',
    'icon-96.png',
    'icon-128.png',
    'icon-144.png',
    'icon-152.png',
    'icon-192.png',
    'icon-384.png',
    'icon-512.png'
]

pwa_assets.forEach(asset => {
    copyFileSync(`public/${asset}`, `dist/${asset}`)
})

const {code, map} = await min_js({'bundle.es.js': r('dist/bundle.es.js')}, {sourceMap: {content: r('dist/bundle.es.js.map')}})

write('dist/bundle-final.js', code + '\n//# sourceMappingURL=bundle-final.js.map')
write('dist/bundle-final.js.map', map)

const scripts = [
    `<script type=module>${r('dist/bundle-final.js').replace(/\/\/# sourceMappingURL=.*/, '').trim()}</script>`,
]

const pg = apply_repls(r('index.html'), [
    [/\n+ */g, ''], // important for sentry
    [/(?<=<\/title>)/, () => `<style>${r(`dist/${pkg.name}.css`)}</style>`],
    [/<script src.+<\/script>/, () => scripts.join('')],
])
const icon_repls = [[/ xmlns=".*?"/, ''], ['id="', 'id="icon-'], [/\n */g, ''], [/(\d")\//g, '$1 /'], [/="([^, ]+)"/g, '=$1']]
write('dist/index.html', pg + apply_repls(r('public/icons.svg'), icon_repls))
