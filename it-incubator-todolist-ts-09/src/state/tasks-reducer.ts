import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';
import {TasksStateType} from '../App';


export type RemoveTaskActionType = {
    type: 'REMOVE_TASK'
    taskId: string
    todolistId: string
}

export type AddTaskActionType = {
    type: 'ADD_TASK'
    todolistId: string
    newTask: {id: string, title: string, isDone: boolean}

}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE_TASK_STATUS'
    isDone: boolean
    todolistId: string
    taskId: string

}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE_TASK_TITLE'
    todolistId: string,
    taskId: string
    title: string
}

type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionType | ChangeTaskTitleActionType

export const tasksReducer = (TasksState: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE_TASK':
            let copyState = {...TasksState}
            copyState[action.todolistId] = copyState[action.todolistId].filter(task => task.id !== action.taskId)
            return copyState

        case 'ADD_TASK':
            let newTasksTodolist = [ ...TasksState[action.todolistId], action.newTask]
            return {
                ...TasksState,
                [action.todolistId]: newTasksTodolist
            }

        case 'CHANGE_TASK_STATUS':
        let case2 = {...TasksState}
    // найдём нужную таску:
    let task = case2[action.todolistId].find(t => t.id === action.taskId);
    //изменим таску, если она нашлась
    if (task) {
        task.isDone = action.isDone;
        // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой

    }
    return {...case2};

         case 'CHANGE_TASK_TITLE':
             let case4 = {...TasksState}
             let task4 = case4[action.todolistId].find(t => t.id === action.taskId);
             if (task4) {
                 task4.title = action.title;// засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
             }
             return {...case4};
        default:
            throw new Error('Bla Bla Bla')
    }
}
