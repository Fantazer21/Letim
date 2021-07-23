import {PostDataType} from "../types";


export type stateType = {
    dataForHeader: string,
    profileData: Array<PostDataType> | any,
    dialogsItemData: Array<dialogsItemDataType>,
    messagesData: Array<MessageType> | any
    dispatch: (action: AppActionsType) => void
    getState: () => void
    subscribe: (observer: any) => void
}



export type dialogsItemDataType = {
    id: number,
    name: string,
}

export type MessageType = {
    message: string
}


export type AddPostActionType = {
    type: "addPost",
    postMessage: string
}
export type DeletePostActionType = {
    type: "deletePost"
}
export  type AddPostProfileAT = {
    type: 'AddPostProfile'
    state: string
}

export  type DeletePostProfileAT = {
    type: 'DeletePostProfile'
}

export type AppActionsType = AddPostActionType | DeletePostActionType | AddPostProfileAT | DeletePostProfileAT

export const addPostAC = (postMessage: string): AppActionsType => {
    return {type: "addPost", postMessage}
}


export const deletePostAC = (): AppActionsType => {
    return {type: "deletePost"}
}


