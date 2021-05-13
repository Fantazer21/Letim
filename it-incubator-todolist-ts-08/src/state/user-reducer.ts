export type stateType = {
    name: string,
    age: number,
    city: "Moscow" | 'Sarajevo' | 'Toronto'
}

type actionType = {
    type: 'INCREMENT-AGE' | 'CHANGE-CITY' | 'CHANGE-NAME'
}
export const userReducer = (state: stateType, action: actionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE-CITY':
            return {...state, city: 'Toronto'}
        case 'CHANGE-NAME':
            return {
            ...state, name: 'Mike'
        }
        default:
            throw new Error("Bla Bla BLa")
    }


}

