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
    id: string
    filter: any
    // title: string
    // todolistID: string
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

        case 'CHANGE-TODOLIST-FILTER':

            const todolist = todoLists.find(tl => tl.id === action.id)
            if(todolist) {
                todolist.filter = action.filter
            }
            return [...todoLists]

        case 'CHANGE-TODOLIST-TITLE':
            let todolistTitle = todoLists.find(t => t.id === action.todolistID);
            //изменим таску, если она нашлась
            if (todolistTitle) {
                todolistTitle.title = action.title;
            }
        default:
            return todoLists
    }
}