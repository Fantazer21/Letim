import {setToDoListsAC, toDoListsReducer} from "./to-do-lists-reducer";
type startStateType = {
    id: string,
    title: string,
    filter: string,
    addedDate: string,
    order: number
}
let todolistId1 = '1'
let todolistId2 = '2'
 const startState: Array<startStateType> = [
     {id: todolistId1, title: 'What to learn', filter: 'all', addedDate: '', order: 0},
     {id: todolistId2, title: 'What to buy', filter: 'all', addedDate: '', order: 0}
 ]
test('todolists should be set to the state', () => {
    const action = setToDoListsAC(startState)

    const endState = toDoListsReducer(startState,action)
    expect(endState[0].length).toBe(2)
})