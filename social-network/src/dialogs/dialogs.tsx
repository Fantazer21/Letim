import React from "react";
import s from './Dialogs.module.css'

//Refactoring 23 lesson
const Message = (props: any) => {
    return (
        <div className={s.message}>{props.name} : {props.statement} </div>
    )
}

const Dialogs = (props: any) => {
    return (
        <div className={s.messages}>
            <Message name='Ilya' statement='Hello Ilya' />
            <Message name='Sergey' statement='Hello Sergey' />
            <Message name='Alex' statement='Hello Alex' />
            <Message name='Andrew' statement='Hello Andrew' />
        </div>

    )
}

export default Dialogs