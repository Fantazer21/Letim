import React from 'react'
import styles from './content.module.css'
import {Route, Switch} from "react-router-dom";
import {contentType} from '../types';
import {ProfileContainer} from "../profile/profile-container";
import {DialogsContainer} from "../dialogs/dialogsContainer";
import {UsersContainer} from "../users/users-container";


const Content = (props: contentType) => {
    return (
        <div className={styles.content}>
            <Switch>
                <Route path='/profile' render={() => <ProfileContainer/>}/>

                <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                <Route path='/users' render={() => <UsersContainer/>}/>

            </Switch>

        </div>

    )
}
export default Content

