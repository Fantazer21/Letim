import {AppActionsType, messagesDataType} from "./state";

export const messagesReducer = (state: Array<messagesDataType>, action: AppActionsType) => {
    switch (action.type) {
        case 'addPost':
            let newPost: any = {
                message: action.postMessage
            }
            state.push(newPost)
            return state
        case "deletePost":
            state.pop()
            return state
        default:
            return state
    }
}
