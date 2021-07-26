import React from "react";
import Profile from "./profile";
import {ProfileContainerType} from "../types";
import {AddPostProfileAC, DeletePostProfileAC} from "../redux/profile-reducer";
import {connect} from "react-redux";
import {AppDispatchType, AppStateType, store} from "../redux/redux-store";


// export const ProfileContainer = (props: ProfileContainerType) => {
//
//     let posts = props.state.profilePage.posts
//
//     let addPostProfile = (state: string) => props.dispatch(AddPostProfileAC(state))
//
//     let deletePostProfile = () => props.dispatch(DeletePostProfileAC())
//
//     return (<Profile posts={posts} addPostProfile={addPostProfile} deletePostProfile={deletePostProfile}
//     />)
// }


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addPostProfile: (state: string) => {
            dispatch(AddPostProfileAC(state))
        },
        deletePostProfile: () => {
            dispatch(DeletePostProfileAC())
        }
    }
}

export const ProfileContainer  = connect(mapStateToProps, mapDispatchToProps)(Profile)