import {FilterValuesType, TodolistType} from '../App'
import {v1} from "uuid";

type RemoveTodolistAT = {
    type: 'REMOVE-TODOLIST'
    todoListID: string
}

type AddToDoListAT = {
    type: 'ADD-TODOLIST'
    title: string
}

type ChangeTodoListTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string
    todolistID: string
}

type ChangeTodoListFilterAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    newFilterValue: FilterValuesType
    todolistID: string
}

type ActionType = RemoveTodolistAT | AddToDoListAT | ChangeTodoListTitleAT | ChangeTodoListFilterAT

export const todolistReducer = (todoLists: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {

        case 'REMOVE-TODOLIST':
            return todoLists.filter(tl => tl.id !== action.todoListID)

        case 'ADD-TODOLIST':
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.title, filter: 'all'};

            return [...todoLists, newTodolist]

        case 'CHANGE-TODOLIST-TITLE':
            return todoLists.map(tl => tl.id === action.todolistID ? {...tl, title: action.title} : tl)

        case 'CHANGE-TODOLIST-FILTER':
            return todoLists.map(tl => tl.id === action.todolistID ? {...tl, filter: action.newFilterValue} : tl)

        default:
            return todoLists
    }
}