import React, {ChangeEvent, useState} from "react";
import s from './profile.module.css';

type typePerson = {
    title: string | undefined,
    state: string | undefined
}

const Person = (props: typePerson) => {
    return (
        <div className={s.message_title}>
            <div>  {props.title} </div>
            <div>  {props.state} </div>
        </div>
    )
}

const Profile_photo = (props: any) => {
    return (
        <div>
            <img className={s.Profile_photo} src={props.path}/>
        </div>
    )
}


export type profileType = {
    profile: any
}

const Profile = (props: profileType) => {


    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        console.log(newPostElement.current?.value)
    }

    return (


        <div className={s.Profile_full}>

            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}></button>


            <div className={s.Profile_full_message}>
                <div className={s.block_photo}>
                    <Profile_photo
                        path={props.profile[0].path}/>
                </div>
                <div>
                    <Person
                        title={props.profile[0].title}
                        state={props.profile[0].state}/>
                </div>
            </div>


            <div className={s.Profile_full_message}>
                <div className={s.block_photo}>
                    <Profile_photo
                        path={props.profile[1].path}/>
                </div>
                <div>
                    <Person
                        title={props.profile[1].title}
                        state={props.profile[1].state}/>
                </div>

            </div>


        </div>

    )
}
export default Profile