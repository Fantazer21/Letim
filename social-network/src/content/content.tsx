import React from 'react'
import styles from './content.module.css'
import {Route} from "react-router-dom";
import Dialogs from "../dialogs/dialogs";
import Profile from "../profile/profile";

export type profileType = {
    profile: any,
    dialogsItemData: any,
    messagesData: any,
    addPost: Function
}

const Content = (props: profileType) => {
    return (
        <div className={styles.content}>
            <Route path='/profile' render={() => <Profile profile={props.profile}/>}/>
            <Route path='/dialogs' render={() => <Dialogs dialogsItemData={props.dialogsItemData}
                                                          messagesData={props.messagesData}
                                                          addPost={props.addPost}
            />}/>
        </div>

    )
}
export default Content
