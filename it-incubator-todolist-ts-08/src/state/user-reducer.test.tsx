import {stateType, userReducer} from "./user-reducer";

test('INCREMENT SHOULD BE CORRECT' , () => {
    //data
    const startState: stateType = { name: 'Ilya', age: 30, city: 'Sarajevo'}
    //action
    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})
    //result
    expect(endState.age).toBe( 31)
})

test( 'CHANGE-CITY SHOULD BE CORRECT', () => {
    //data
    const startState: stateType = { name: 'Ilya', age: 30, city: 'Sarajevo'}
    //action
    const endState = userReducer(startState, {type: 'CHANGE-CITY' } )

    //result
    expect(endState.city).toBe('Toronto')
})

test("CHANGE-NAME SHOULD BE CORRECT", () => {
    let startState: stateType  =  { name: 'Ilya', age: 30, city: 'Sarajevo'}

    let endState = userReducer(startState, {type: 'CHANGE-NAME'})

    expect(endState.name).toBe('Mike')
    expect(endState.age).toBe(30)
})