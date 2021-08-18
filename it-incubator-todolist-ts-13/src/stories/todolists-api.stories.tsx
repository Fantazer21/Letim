import React, {useEffect, useState} from 'react'
import axios from "axios";
import { todolistAPI } from '../api/todolist-api';

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'api-key': '16756f9c-067a-4544-b57e-d1e6105a9987'
    }
}


export const GetTodolists = () => {
    let [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.GetTodolist().then((res) => {
            setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.CreateTodolist('New title react').then( (res) => {
            setState(res.data);
        } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '0f191a60-5e8f-4a97-b95b-9a3d6651f784';
        todolistAPI.DeleteTodolist(todolistId).then( (res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'a3129750-ced7-461d-8bb5-80e503ae471f'
        todolistAPI.updateTodolist(todolistId, 'SOME NEW TITLE')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}


