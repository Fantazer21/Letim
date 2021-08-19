export const initialState = {
    startValue: 0
}

type initialStateType = typeof initialState


export const counterReducers = (state: initialStateType = initialState, action: any) => {
    switch (action.type) {
        case "INC":
            return {...state, startValue: state.startValue + 1}
        case"DEC" :
            return {...state, startValue: state.startValue - 1}
        default:
            return state
    }
}

export const incAC = () => ({type: "INC"} as const)

export const decAC = () => ({type: "DEC"} as const)

