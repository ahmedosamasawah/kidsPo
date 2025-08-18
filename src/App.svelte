<main>
    {#if $session.loaded}
        <svelte:component this={component} {...route.params} params={route.params} />
        {#if is_404}
            <div class="flex h-[100svh] flex-col items-center justify-center text-2xl font-bold">
                <h1>الصفحة غير موجودة</h1>
                <a class="block text-blue-600" href="/">الرئيسية</a>
            </div>
        {/if}
    {/if}
</main>
<ModeWatcher />
<ConfirmDialog />
<OfflineIndicator />

<script module>
import {ModeWatcher} from 'mode-watcher'
import navaid from 'navaid'

import {session} from '~/stores.svelte.js'

// prettier-ignore
/** @type {Array<[string, Promise<any>]>} */
const routes = [
    ['/', import('./pages/GetStarted.svelte')],
    ['/join/:code', import('./pages/JoinFamily.svelte')],
    ['/family', import('./pages/FamilyBoard.svelte')],
]
let component = $state()
let is_404 = $state(false)

export const router = navaid('/', async uri => {
    is_404 = true
    component = null
    Object.assign(route, {path: uri, params: null})
})
export const route = $state({path: location.pathname, params: null})

for (const [path, cmp] of routes) {
    router.on(path, params => {
        is_404 = false
        document.startViewTransition(async () => {
            const {default: component_default, ...exports} = await cmp

            if (exports?.validate_params && !(await exports.validate_params(params))) {
                router.route('/')
                return
            }

            component = component_default
            Object.assign(route, {path: location.pathname, params})
        })
    })
}

window.router_initialized = !!window.router_initialized
session.subscribe($session => {
    if (!window.router_initialized && $session.loaded) {
        setTimeout(() => router.listen(), 10)
        window.router_initialized = true
    }
})

function navigate_based_on_session(session_state) {
    if (!session_state.loaded) return

    const current_path = location.pathname
    const has_session = session_state.family_id && session_state.join_code

    if (has_session && (current_path === '/' || current_path.startsWith('/join/'))) {
        router.route('/family')
    } else if (!has_session && current_path === '/family') {
        router.route('/')
    }
}

session.subscribe(navigate_based_on_session)

import {setContext} from 'svelte'

import ConfirmDialog from './components/shared/ConfirmDialog.svelte'
import OfflineIndicator from './components/shared/OfflineIndicator.svelte'
</script>

<script>
setContext('router', router)
</script>
