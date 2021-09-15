import React from "react";
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.wrapper}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
            <div className={s.message__wrapper}>
                <div>
                    <p className={s.name}>{props.name}</p>
                    <p className={s.message__text}>{props.message}</p>
                </div>
                <time className={s.time} dateTime={"props.time"}>{props.time}</time>
            </div>
        </div>
    );
}

export default Message;
