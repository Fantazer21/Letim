let initialState = {
    startValue: 220
}

type InitialStateType = typeof initialState

export const counterReducers = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case 'INC':
            return {...state, startValue: state.startValue + 1}
        case 'DEC':
            return {...state, startValue: state.startValue - 1}
        default:
            return state
    }
}

export const incCreatorAC = () => ({type: 'INC'} as const)

export const decCreatorAC = () => ({type: 'DEC'} as const)