type actionType = 'INC' | 'DEC'


const initialState = {
    counter: 0
}

export const counterReducers = (state = initialState, action: any) => {
    switch (action) {
        case 'INC':
            return {counter: state.counter + 1}
        case 'DEC':
            return {counter: state.counter - 1}
        default:
            return state
    }
}