import {contentType} from "../types";

export type UsersStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
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
    currentPage: 1,
    isFetching: true
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
        case 'SetTotalUsersCount':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'SetPreloader':
            return {...state, isFetching: action.toggle }
        default:
            return state

    }
}

export type UsersActionsType = UsersFollowACType | UsersUnFollowACType | SetUsersAC | SetCurrentPageACType | SetTotalUsersCountACType | SetPreloaderACType

export const usersFollow = (userId: number) => ({type: "UsersFollow", userId} as const)
type UsersFollowACType = ReturnType<typeof usersFollow>

export const usersUnFollow= (userId: number) => ({type: "UsersUnFollow", userId} as const)
type UsersUnFollowACType = ReturnType<typeof usersUnFollow>

export const setUsers = (users: Array<UserType>) => ({type: "SetUsers", users} as const)
type SetUsersAC = ReturnType<typeof setUsers>

export const setCurrentPage = (currentPage: number) => ({type: 'SetCurrentPage', currentPage} as const)
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>

export const setTotalUsersCount = (totalUsersCount : number) => ( {type: 'SetTotalUsersCount', totalUsersCount} as const)
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>

export const setPreloader = (toggle: boolean) => ( {type: 'SetPreloader', toggle} as const)
type SetPreloaderACType = ReturnType<typeof setPreloader>