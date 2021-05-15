import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {todolistsReducer} from "./todolists-reducer";
import {TodolistType} from "../App";
import {TasksStateType} from "../AppWithRedux";

const rootReducer = combineReducers({
    todolist: todolistsReducer,
    tasks: tasksReducer
})

// type AppRootState ={
//     todolists: Array<TodolistType>
//     tasks: TasksStateType
// }

type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store