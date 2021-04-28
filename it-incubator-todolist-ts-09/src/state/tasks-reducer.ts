import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';
import {TasksStateType} from '../App';
import {TaskType} from "../Todolist";

export type RemoveTaskActionType = {
    type: 'REMOVE_TASK'
    taskId: string
    todolistId: string

}
export type AddActionType = {
    todolistId: string,
    title: string
}


type ActionsType = RemoveTaskActionType | AddActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE_TASK':
            let copyState = {...state}
            copyState[action.todolistId] = copyState[action.todolistId].filter(task => task.id !== action.taskId)
            return copyState
        case 'ADD_TASK':
            let newTask: TaskType = {id: v1(), title: action.title, isDone: false}
            let newTasksTodolist = [newTask, ...state[action.todolistId]]
            return {
                ...state,
                [action.todolistId]: newTasksTodolist
            }
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE_TASK', taskId, todolistId}
}
export const addTaskAC = (todolistId: string, title: string): AddActionType => {
    return { type: ''}
}

