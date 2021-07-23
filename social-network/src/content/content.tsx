import React from 'react'
import styles from './content.module.css'
import {Route} from "react-router-dom";
import Dialogs from "../dialogs/dialogs";
import Profile from "../profile/profile";
import {contentType} from '../types';


const Content = (props: contentType) => {
    return (
        <div className={styles.content}>
            <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}
                                                          addPostProfile={props.addPostProfile}
                                                          deletePostProfile={props.deletePostProfile}
            />}/>

            <Route path='/dialogs' render={() => <Dialogs dialogsItemData={props.state.messagesPage.dialogsItemData}
                                                          messagesData={props.state.messagesPage.messagesData}
                                                          addPost={props.addPost}
                                                          deletePost={props.deletePost}
            />}/>
        </div>

    )
}
export default Content
