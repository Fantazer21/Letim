import axios from 'axios'
import {CreateTodolist, DeleteTodolist, GetTodolists} from "../stories/todolists-api.stories";

export const settings = {
    withCredentials: true,
    headers: {
        'api-key': '16756f9c-067a-4544-b57e-d1e6105a9987'
    }
}

 export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/', ...settings
})

type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}

type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        item: TodolistType
    }
}
type DeleteToDoListType  = {
    data: Object,
    messages: Array<string>,
    fieldsErrors: Array<string>,
    resultCode: number
}





export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put(`todo-lists/${todolistId}`, {title: title})
        return promise
    },
    DeleteTodolist(id: string) {
        const promise = instance.delete<Array<DeleteToDoListType>>( `todo-lists/${id}`  )
        return promise
    },
    CreateTodolist(title: string) {
        const promise = instance.post<Array<CreateTodolistResponseType>>('todo-lists', {title: "React NEw TDL"})
        return promise
    },
    GetTodolist() {
        const promise = instance.get<Array<TodolistType>>('todo-lists')
        return promise
    }
}



