import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type dialogsType = {
    dialogsItemData: Array<DialogItemType>,
    messagesData: Array<MessageType>,
}

type DialogItemType = {
    id: number,
    name: string
}

type MessageType = {
    message: string
}


const DialogItem = (props: any  ) => {
    return <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
}

const Message = (props: any) => {
    return <div>{props.message}</div>
}


let dialogsItemData = [
    {id: 1, name: 'Ilya'},
    {id: 2, name: 'DIma'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Masha'},
    {id: 6, name: 'Dasha'},
]

let messagesData= [
    {message: 'Hello i am Ilya'},
    {message: 'Hi i love it kamasutra'},
    {message: 'What`s happened yesterday'},
    {message: 'I am going to swim..'},
]




const Dialogs = (props: dialogsType) => {
    let mapDialogItemData = props.dialogsItemData.map(el => <DialogItem id={el.id} name={el.name} />)

    let mapMessageData = props.messagesData.map(el => <Message message={el.message}/>)

    return (
        <div className={s.messages}>
            <div className={s.messages__names}>
                {mapDialogItemData}
            </div>
            <div className={s.messages__dialogs}>
                {mapMessageData}
            </div>
        </div>

    )
}

export default Dialogs