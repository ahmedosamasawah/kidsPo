export function repeat_click(el, callback) {
    let repeat_interval
    let click_count = 0
    function click_wrapper(e) {
        cleanup()
        if (window._useragent?.ios) e.preventDefault()
        callback(++click_count)
        repeat_interval = setInterval(() => callback(++click_count), 150)
    }
    const [start_ev, end_ev] = window._useragent?.is_touch
        ? ['touchstart', 'touchend']
        : ['mousedown', 'mouseup']
    const cleanup = () => {
        clearInterval(repeat_interval)
        click_count = 0
    }
    el.addEventListener(start_ev, click_wrapper)
    document.documentElement.addEventListener(end_ev, cleanup)
    return {
        destroy() {
            document.documentElement.removeEventListener(end_ev, cleanup)
        },
    }
}
