export type UsersStateType = {
    users: Array<UserType>
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
    users: [
        // {
        //     id: 1,
        //     photo: photoVar,
        //     // button: "unsubscribe",
        //     followed: false,
        //     name: "Ilya",
        //     message: "I am a boss",
        //     country: "Russia",
        //     city: 'Moscow'
        // },
        // {
        //     id: 2,
        //     photo: photoVar,
        //     // button: 'unsubscribe',
        //     followed: false,
        //     name: "Sasha",
        //     message: "I am a boss too",
        //     country: "Belarus",
        //     city: 'Minsk'
        // },
        // {
        //     id: 3,
        //     photo: photoVar,
        //     // button: 'unsubscribe',
        //     followed: false,
        //     name: "Miki",
        //     message: "I am best of the best...",
        //     country: "Hungary",
        //     city: 'Budapest'
        // }
    ]
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
                users: [...state.users, ...action.users]
            }
            return copy3
        default:
            return state

    }
}

export type UsersActionsType = UsersFollowACType | UsersUnFollowACType | setUsersAC

export const usersFollowAC = (userId: number) => ({type: "UsersFollow", userId} as const)
type UsersFollowACType = ReturnType<typeof usersFollowAC>

export const usersUnFollowAC = (userId: number) => ({type: "UsersUnFollow", userId} as const)
type UsersUnFollowACType = ReturnType<typeof usersUnFollowAC>

export const setUsersAC = (users: Array<UserType>) => ({type: "SetUsers", users} as const)
type setUsersAC = ReturnType<typeof setUsersAC>