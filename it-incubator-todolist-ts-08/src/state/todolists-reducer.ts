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
    filter: FilterValuesType
}

type ActionType = RemoveTodolistAT | AddToDoListAT | ChangeTodoListTitleAT | ChangeTodoListFilterAT

export const todolistReducer = (todoLists: Array<TodolistType>, action: ActionType) => {
 switch (action.type) {
     case 'REMOVE-TODOLIST' :
            let newList = todoLists.filter(el => el.id !== action.todoListID)
        return  newList
     case 'ADD-TODOLIST':
            let todoListID = v1()
            let newToDoList: TodolistType = {
                id: todoListID, title: action.title, filter: 'all'
            }
            return [...todoLists, newToDoList]
     case 'CHANGE-TODOLIST-TITLE':
         let todolistTitle = todoLists.find(tl => tl.id === action.todolistID);
         if (todolistTitle) {
             todolistTitle.title = action.title;
         }
         return [...todoLists]
     case 'CHANGE-TODOLIST-FILTER':
         let todolist = todoLists.find(tl => tl.id === action.id);
         if (todolist) {
             todolist.filter = action.filter;

         }
         return[...todoLists]


     default:
          throw new Error('I dont understand type')
 }
}
