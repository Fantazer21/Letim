import React from 'react'
import styles from './Message.module.css'

type MessagePropsData = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsData) {
    return (
        <div className={styles.cloud}>
            <img src={props.avatar} alt={'ava'} className={styles.photo}/>


            <div className={styles.content}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.message}>{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
