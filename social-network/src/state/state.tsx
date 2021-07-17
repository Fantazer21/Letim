import {rerenderEntireTree} from "../render";

export type stateType = {
    dataForHeader: string,
    profileData: Array<profileDataType>,
    dialogsItemData: Array<dialogsItemDataType>,
    messagesData: Array<messagesDataType>
    dispatch: (action: AppActionsType) => void
}

 export type profileDataType = {
    id: number,
    title: string,
    state: string,
    path: string
}

type dialogsItemDataType = {
    id: number,
    name: string,
}

type messagesDataType = {
    message: string
}

type AddPostActionType = {
    type: "addPost",
    postMessage: string
}

type DeletePostActionType = {
    type: "deletePost"
}
type AddPostProfileAT = {
    type: 'AddPostProfile'
    state: string
}

type DeletePostProfileAT = {
    type: 'DeletePostProfile'
}

export type AppActionsType = AddPostActionType | DeletePostActionType | AddPostProfileAT | DeletePostProfileAT


export let state = {
    dataForHeader: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
    profileData: [
        {
            id: 1,
            title: 'Message 1',
            state: 'Hello I am Joker',
            path: 'data:image/jpeg;base64,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'
        },
        {
            id: 2,
            title: 'Message 2',
            state: 'Hello I am Batman',
            path: 'data:image/png;base64,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'
        }
    ],
    dialogsItemData: [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'DIma'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Dasha'},
    ],
    messagesData: [
        {message: 'Hello i am Ilya'},
        {message: 'Hi i love it-kamasutra'},
        {message: 'What`s happened yesterday'},
        {message: 'I am going to swim..'},
    ],
    dispatch(action: AppActionsType) {
        if (action.type === 'addPost') {
            let newPost: any = {
                message: action.postMessage
            }
            state.messagesData.push(newPost)

            rerenderEntireTree(state)
            console.log(state)
        } else if (action.type === 'deletePost') {
            state.messagesData.pop()
            rerenderEntireTree(state)
            console.log(state)
        } else if (action.type === 'AddPostProfile')
        {
            let copyPost = {
                id: 3,
                title: 'Message 3',
                state: action.state,
                path: 'data:image/jpeg;base64,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'
            }
            state.profileData.push(copyPost)
            console.log( state.profileData)
            rerenderEntireTree(state)
        } else if (action.type === 'DeletePostProfile') {
             state.profileData.pop()
             rerenderEntireTree(state)
            console.log( state.profileData)
        }
    },
}

export const addPostAC = (postMessage: string): AppActionsType => {
    return {type: "addPost", postMessage}
}


export const deletePostAC = (): AppActionsType => {
    return {type: "deletePost"}
}

export const AddPostProfileAC = (state: string): AppActionsType => {
    return {type: 'AddPostProfile', state: state}
}

export const DeletePostProfileAC = (): AppActionsType => {
    return {type: 'DeletePostProfile'}
}


