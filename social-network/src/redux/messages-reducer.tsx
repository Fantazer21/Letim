import {MessagesStateType} from "../types";
import {AppActionsType, MessageType} from "./state";


let initialState: MessagesStateType = {
    messagesData: [
        {message: 'Hello i am Ilya'},
        {message: 'Hi i love it-kamasutra'},
        {message: 'What`s happened yesterday'},
        {message: 'I am going to swim..'},
    ],
    dialogsItemData: [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'DIma'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Dasha'},
    ],
}


export const messagesReducer = (state = initialState, action: MessagesActionsType): MessagesStateType => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newPost: MessageType = {
                message: action.postMessage
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newPost]
            }
        case "DELETE_MESSAGE":
            let copy2 = {...state}
            copy2.messagesData.pop()
            return copy2;
        default:
            return state
    }
}

type AddMessageAC = { type: "ADD_MESSAGE", postMessage: string }

type DeleteMessageAC = { type: "DELETE_MESSAGE" }
export type MessagesActionsType = AddMessageAC | DeleteMessageAC


export const AddMessageAC = (postMessage: string): AddMessageAC => {
    return {type: "ADD_MESSAGE", postMessage}
}
export const DeleteMessageAC = (): DeleteMessageAC => {
    return {type: "DELETE_MESSAGE"}
}
