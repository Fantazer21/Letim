import React from "react";
import s from './profile.module.css';
import {PostDataType, profileType, typePerson} from "../types";


const Profile = (props: profileType) => {

    let profileMapList = props.posts.map((el: any, ind: number) => <ProfileFullMessage key={ind} id={ind}
                                                                                         path={el.path} title={el.title}
                                                                                         state={el.state}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    return (
        <div className={s.Profile_full}>
            <textarea ref={newPostElement}></textarea>
            <button onClick={() => props.addPostProfile(newPostElement.current?.value || '')}> add post</button>
            <button onClick={props.deletePostProfile}> delete post</button>
            {profileMapList}
        </div>

    )
}


const Person = (props: typePerson) => {
    return (
        <div className={s.message_title}>
            <div>  {props.title} </div>
            <div>  {props.state} </div>
        </div>
    )
}

const ProfilePhoto = (props: any) => {
    return (
        <div>
            <img className={s.Profile__img} src={props.path} alt={'ProfilePh'}/>
        </div>
    )
}


const ProfileFullMessage = (props: PostDataType) => {

    return <div className={s.Profile_full_message}>
        <div className={s.block_photo}>
            <ProfilePhoto
                path={props.path}/>
        </div>
        <div>
            <Person
                title={props.title}
                state={props.state}/>
        </div>
    </div>


}

export default Profile