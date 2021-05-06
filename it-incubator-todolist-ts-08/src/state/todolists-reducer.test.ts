import {todolistReducer} from './todolists-reducer';
import {v1} from 'uuid';
import {TodolistType} from '../App';

type FilterValuesType = 'all' | 'completed' | 'active'

test('Correct REMOVE-TODOLIST', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todolistReducer(startState, { type: 'REMOVE-TODOLIST',  todoListID: todolistId1})

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});


test('Correct ADD-TODOLIST', () => {
    let newTodolistId = v1();

    const startState: Array<TodolistType> = [
        {id: newTodolistId, title: "What to learn", filter: "all"},
        {id: newTodolistId, title: "What to do", filter: "all"},

    ]

    const endState = todolistReducer(startState, {type: 'ADD-TODOLIST', title: newTodolistId})

    expect(endState.length).toBe(3);
    expect(endState[0].id).toBe(newTodolistId);
});

test('Correct CHANGE-TODOLIST-FILTER', () => {
    let newTodolistId1 = v1();
    let newTodolistId2 = v1();

    let newFilter: FilterValuesType = "active";

    const startState: Array<TodolistType> = [
        {id: newTodolistId1, title: "What to learn", filter: "all"},
        {id: newTodolistId2, title: "What to buy", filter: "all"}
    ]

    const action = {
        type: 'CHANGE-TODOLIST-FILTER' as const,
        id: newTodolistId2,
        filter: newFilter
    };

    const endState = todolistReducer(startState, action);

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});

test('Correct CHANGE-TODOLIST-TITLE', () => {
    let newTodolistId1 = v1();
    let newTodolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        {id: newTodolistId1, title: "What to learn", filter: "all"},
        {id: newTodolistId2, title: "What to do", filter: "all"},

    ]
    const action = {
        type: 'CHANGE-TODOLIST-TITLE' as const,
        todolistID: newTodolistId2,
        title: newTodolistTitle
    };

    const endState = todolistReducer(startState, action)

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});





