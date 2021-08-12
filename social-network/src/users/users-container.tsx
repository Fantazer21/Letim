import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../redux/redux-store";
import {
    setCurrentPage,
    setPreloader,
    setTotalUsersCount,
    setUsers,
    usersFollow,
    usersUnFollow,
    UserType
} from "../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./users";


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}



type UsersPropsType = {
    users: Array<UserType>
    usersFollow: (userId: number) => void
    usersUnFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    totalUsersCount: number,
    pageSize: number,
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setPreloader: (toggle: boolean) => void
    isFetching: boolean
}

class UsersApi extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setPreloader(true)
        axios.get<{ items: Array<UserType>, totalCount: number, toggle: boolean }>
        (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setPreloader(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
        axios.get<{ items: Array<UserType> }>
        (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setPreloader(false)
        })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <img src='https://i.pinimg.com/originals/ae/d1/1d/aed11d6975231b91c8e992c02b8376da.gif'/>
            : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    usersFollow={this.props.usersFollow}
                    usersUnFollow={this.props.usersUnFollow}
                />}
        </>
    }
}

export const UsersContainer = connect(mapStateToProps,  {
    usersFollow,
    usersUnFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setPreloader

})(UsersApi)