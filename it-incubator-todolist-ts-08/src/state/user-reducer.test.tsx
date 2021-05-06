import {userReducer} from "./user-reducer";

test('User reducer should increment ony age', () => {

    const startState = {
        age: 20, childrenCount: 0, name: 'Ilya',
    }
    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(21)
    expect(endState.name).toBe('Ilya')
})

test('User reducer should increment ony children count', () => {
    const startState = {
        age: 20, childrenCount: 0, name: 'Ilya',
    }
    const value = 2
    const endState = userReducer(startState, {type: 'INCREMENT-CHILDREN-COUNT', value: value })

    expect(endState.childrenCount).toBe(2)
    expect(endState.age).toBe(20)
})

test('User reducer should change name', () => {
    const startState = {
        age: 20, childrenCount: 0, name: 'Ilya',
    }
    const newName= 'Sergey'
    const endState = userReducer(startState, {type: 'CHANGE_NAME', newName: newName })

    expect(endState.name).toBe('Sergey')
    expect(endState.age).toBe(20)
})