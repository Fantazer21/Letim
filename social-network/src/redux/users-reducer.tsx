import {contentType} from "../types";

export type UsersStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}


export type UserType = {
    id: number
    photo: string
    followed: boolean
    name: string
    message: string
    country: string
    city: string
}


let initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
}


export const userReducer = (state = initialState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case "UsersFollow":
            let copy = {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
            return copy
        case 'UsersUnFollow':
            let copy2 = {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
            return copy2
        case 'SetUsers':
            let copy3 = {
                ...state,
                users: [...action.users]
            }
            return copy3
        case 'SetCurrentPage' :
            return {...state, currentPage: action.currentPage}
        default:
            return state

    }
}

export type UsersActionsType = UsersFollowACType | UsersUnFollowACType | setUsersAC | SetCurrentPageACType

export const usersFollowAC = (userId: number) => ({type: "UsersFollow", userId} as const)
type UsersFollowACType = ReturnType<typeof usersFollowAC>

export const usersUnFollowAC = (userId: number) => ({type: "UsersUnFollow", userId} as const)
type UsersUnFollowACType = ReturnType<typeof usersUnFollowAC>

export const setUsersAC = (users: Array<UserType>) => ({type: "SetUsers", users} as const)
type setUsersAC = ReturnType<typeof setUsersAC>

export const SetCurrentPageAC = (currentPage: number) => ({type: 'SetCurrentPage', currentPage} as const)
type SetCurrentPageACType = ReturnType<typeof SetCurrentPageAC>