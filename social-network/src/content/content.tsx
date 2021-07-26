import React from 'react'
import styles from './content.module.css'
import {Route} from "react-router-dom";
import {contentType} from '../types';
import {ProfileContainer} from "../profile/profile-container";
import {DialogsContainer} from "../dialogs/dialogsContainer";


const Content = (props: contentType) => {
    return (
        <div className={styles.content}>
            <Route path='/profile' render={() => <ProfileContainer/>} />
                 {/*state={props.state} dispatch={props.dispatch}*/}


            <Route path='/dialogs' render={() => <DialogsContainer
                // state={props.state} dispatch={props.dispatch}
            />}/>
        </div>

    )
}
export default Content

