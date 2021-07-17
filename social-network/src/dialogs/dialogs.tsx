import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {
    dialogsItemData: Array<DialogItemType>,
    messagesData: Array<MessageType>,
    addPost: (postMessage: string) => void
    deletePost: () => void
}

type DialogItemType = {
    id: number,
    name: string
}

type MessageType = {
    message: string

}


const DialogItem = (props: any) => {
    return <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
}

const Message = (props: any) => {
    return <div>{props.message}</div>
}


const Dialogs = (props: DialogsType) => {
    let mapDialogItemData = props.dialogsItemData.map(el => <DialogItem  id={el.id} name={el.name}/>)

    let mapMessageData = props.messagesData.map((el,num) => <Message  message={el.message}/>)

    let sendMessageRef = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.messages}>
            <div className={s.messages__names}>
                {mapDialogItemData}
            </div>
            <div className={s.messages__dialogs}>
                {mapMessageData}
            </div>
            <textarea ref={sendMessageRef}></textarea>
            <button onClick={() => props.addPost(sendMessageRef.current?.value || '')}> addPost</button>
            <button onClick={props.deletePost}>deletePost</button>
        </div>

    )
}

export default Dialogs