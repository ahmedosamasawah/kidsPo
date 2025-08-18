export function validate_family_name(name) {
    if (!name || typeof name !== 'string') return false
    const trimmed = name.trim()
    return trimmed.length >= 2 && trimmed.length <= 60
}

export function validate_child_name(name) {
    if (!name || typeof name !== 'string') return false
    const trimmed = name.trim()
    return trimmed.length >= 1 && trimmed.length <= 40
}

export function validate_join_code(code) {
    if (!code || typeof code !== 'string') return false
    const cleaned = code.toUpperCase().replace(/[-\s]/g, '')
    return /^[A-Z0-9]{6,8}$/.test(cleaned)
}

export function validate_score_delta(delta) {
    return Number.isInteger(delta) && delta >= -999 && delta <= 999
}

export function validate_custom_step(step) {
    return Number.isInteger(step) && step >= 1 && step <= 99
}

export function clean_join_code(code) {
    return code.toUpperCase().replace(/[-\s]/g, '')
}

export function format_join_code_display(code) {
    return code
}

export function create_family_data(name) {
    return {
        name: name.trim(),
    }
}

export function create_child_data(name) {
    return {
        name: name.trim(),
    }
}

export function create_adjustment_data(delta, note = null) {
    return {
        delta: parseInt(delta),
        note: note?.trim() || null,
    }
}
