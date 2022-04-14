export const NEW_TIMER = 'NEW_TIMER'
export const addTimer = (name) => {
    return {
        type: NEW_TIMER,
        payload: {name}
    }
}

export const TOGGLE_TIMER = 'TOGGLE_TIMER'
export const toggleTimer = (index) => {
    return {
        type: TOGGLE_TIMER,
        payload: {index}
    }
}