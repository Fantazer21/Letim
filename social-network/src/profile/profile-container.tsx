
import Profile from "./profile";
import {AddPostProfileAC, DeletePostProfileAC} from "../redux/profile-reducer";
import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../redux/redux-store";



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