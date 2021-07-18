import { rerenderEntireTree } from "../render";
import {AppActionsType, messagesDataType} from "./state";

export const messagesReducer = (state: Array<messagesDataType>, action: AppActionsType) => {
    if (action.type === 'addPost') {
    let newPost: any = {
        message: action.postMessage
    }
    state.push(newPost)

    console.log(state)
} else if (action.type === 'deletePost') {
    state.pop()
    console.log(state)
}
    return state
}
