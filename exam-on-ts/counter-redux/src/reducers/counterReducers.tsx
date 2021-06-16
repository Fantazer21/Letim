const initialState = {
    counter: 220
}

type InitialStateType = typeof initialState

export const counterReducers = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case 'INC':
            return {...state, counter: state.counter + 1}
        case 'DEC':
            return {...state, counter: state.counter - 1}
        default:
            return state
    }
}

export const incCreatorAC = () => ({type: 'INC'} as const)

export const decCreatorAC = () => ({type: 'INC'} as const)