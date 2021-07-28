
import {connect} from "react-redux";
import {Users} from "./users";
import {AppDispatchType, AppStateType} from "../redux/redux-store";
import {usersFollowAC, UsersUnFollowAC} from "../redux/users-reducer";


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        UsersFollow: () => {
            dispatch(usersFollowAC())
        },
        UsersUnFollow: () => {
            dispatch(UsersUnFollowAC())
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)