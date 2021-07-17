import React from "react";
import s from './profile.module.css';
import {profileDataType} from "../state/state";

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
            <img className={s.Profile__img} src={props.path} alt={'Profile photo'}/>
        </div>
    )
}


export type profileType = {
    profile: any
    addPostProfile: (state: string) => void,
    deletePostProfile: () => void,
}


const Profile_Full_Message = (props: profileDataType) => {

        return  <div className={s.Profile_full_message}>
            <div className={s.block_photo}>
                <Profile_photo
                    path={props.path}/>
            </div>
            <div>
                <Person
                    title={props.title}
                    state={props.state}/>
            </div>
        </div>


}

const Profile = (props: profileType) => {

    let profileMapList = props.profile.map( (el: any, ind: number) => <Profile_Full_Message  key={ind} id={ind} path={el.path} title={el.title} state={el.state}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        console.log(newPostElement.current?.value)
    }

    return (


        <div className={s.Profile_full}>

            <textarea ref={newPostElement}></textarea>
            <button onClick={() => props.addPostProfile(newPostElement.current?.value || '')}> add post</button>
            <button onClick={props.deletePostProfile}> delete post</button>


            {profileMapList}



        </div>

    )
}
export default Profile