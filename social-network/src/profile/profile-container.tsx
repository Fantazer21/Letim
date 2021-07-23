import React from "react";
import Profile from "./profile";
import {ProfileContainerType } from "../types";
import {AddPostProfileAC, DeletePostProfileAC} from "../redux/profile-reducer";


export const ProfileContainer = (props: ProfileContainerType) => {
    let posts = props.state.profilePage.posts

    let addPostProfile = (state: string) => props.dispatch(AddPostProfileAC(state))

    let deletePostProfile = () => props.dispatch(DeletePostProfileAC())

    return (<Profile posts={posts} addPostProfile={addPostProfile} deletePostProfile={deletePostProfile}
    />)
}