import {connect} from "react-redux";
import {Users} from "./users";
import {AppDispatchType, AppStateType} from "../redux/redux-store";
import {
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    setUsersAC,
    usersFollowAC,
    usersUnFollowAC,
    UserType
} from "../redux/users-reducer";



let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(SetTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)