import {todolistReducer} from './todolists-reducer';
import {v1} from 'uuid';
import {TodolistType} from '../App';

type FilterValuesType = 'all' | 'completed' | 'active'



test( 'Correct REMOVE-TODOLIST' , () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    let endState = todolistReducer(startState, {type: 'REMOVE-TODOLIST', todoListID: todolistId1})
    expect(endState.length).toBe(1)
})


test('Correct ADD-TODOLIST', () => {

    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    let endState = todolistReducer(startState, {type: 'ADD-TODOLIST', title: todolistId1})
    expect(endState.length).toBe(3)
})

test('Correct ADD-TODOLIST', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const action = {
        type: 'CHANGE-TODOLIST-TITLE',
        id: todolistId2,
        title: newTodolistTitle
    };

    const endState = todolistReducer(startState, {type: 'CHANGE-TODOLIST-TITLE', title: newTodolistTitle,
        todolistID: todolistId2 });

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
})

test('Correct CHANGE-TODOLIST-FILTER', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newFilter: FilterValuesType = "active";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todolistReducer(startState, {type: 'CHANGE-TODOLIST-FILTER',id: todolistId2,filter: newFilter});

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});






