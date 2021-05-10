import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';
import {TasksStateType} from '../App';
import {TaskType} from "../Todolist";

export type RemoveTaskActionType = {
    type: 'REMOVE_TASK'
    taskId: string
    todolistId: string

}
export type AddTaskActionType = {
    type: 'ADD_TASK'
    taskId: string
    todolistId: string

}
export type ChangeTaskActionType = {
    type: 'CHANGE_TASK'
    taskId: string
    todolistId: string

}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE_TASK_TITLE'
    todolistId: string,
    title: string
}


type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskActionType | ChangeTaskTitleActionType

export const tasksReducer = (TasksState: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE_TASK':
            let copyState = {...TasksState}
            copyState[action.todolistId] = copyState[action.todolistId].filter(task => task.id !== action.taskId)
            return copyState
        // case 'ADD_TASK':
        //     // let newTask: TaskType = {id: v1(), title: action.title, isDone: false}
        //     // let newTasksTodolist = [newTask, ...state[action.todolistId]]
        //     // return {
        //     //     ...state,
        //     //     [action.todolistId]: newTasksTodolist
        //     // }
        //
        // case 'CHANGE_TASK':
        //
        // case 'CHANGE_TASK_TITLE':

        default:
            return state
    }
}

//
// function removeTask(id: string, todolistId: string) {
//     //достанем нужный массив по todolistId:
//     let todolistTasks = tasks[todolistId];
//     // перезапишем в этом объекте массив для нужного тудулиста отфилтрованным массивом:
//     tasks[todolistId] = todolistTasks.filter(t => t.id != id);
//     // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
//     setTasks({...tasks});
// }
//
// function addTask(title: string, todolistId: string) {
//     let task = {id: v1(), title: title, isDone: false};
//     //достанем нужный массив по todolistId:
//     let todolistTasks = tasks[todolistId];
//     // перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску:
//     tasks[todolistId] = [task, ...todolistTasks];
//     // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
//     setTasks({...tasks});
// }
//
// function changeStatus(id: string, isDone: boolean, todolistId: string) {
//     //достанем нужный массив по todolistId:
//     let todolistTasks = tasks[todolistId];
//     // найдём нужную таску:
//     let task = todolistTasks.find(t => t.id === id);
//     //изменим таску, если она нашлась
//     if (task) {
//         task.isDone = isDone;
//         // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
//         setTasks({...tasks});
//     }
// }
//
// function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
//     //достанем нужный массив по todolistId:
//     let todolistTasks = tasks[todolistId];
//     // найдём нужную таску:
//     let task = todolistTasks.find(t => t.id === id);
//     //изменим таску, если она нашлась
//     if (task) {
//         task.title = newTitle;
//         // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
//         setTasks({...tasks});
//     }
// }