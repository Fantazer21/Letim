import {connect} from "react-redux";
import {Users} from "./users";
import {AppDispatchType, AppStateType} from "../redux/redux-store";
import {setUsersAC, usersFollowAC, usersUnFollowAC, UserType} from "../redux/users-reducer";


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        usersFollow: (userId: number) => {
            dispatch(usersFollowAC(userId))
        },
        usersUnFollow: (userId: number) => {
            dispatch(usersUnFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)