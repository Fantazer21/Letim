import React, {useState} from "react";
import {ToDoListItem} from "./ToDoListItem";
import {StateType} from "./App";

type ToDoListType = {
    header: string
    todo: Array<StateType>
    onToggle: Function
}


export function Todolist(props: ToDoListType) {

    console.log(props.todo)

    const headerStyle = {
        margin: "30px",
        fontSize: '30px',
        color: 'red'
    }

    return (

        <div>
            <h1 style={headerStyle}>{props.header}</h1>
            {
                props.todo.map((tl, index) => {
                   return  <ToDoListItem key={tl.id} id={tl.id} title={tl.title} status={tl.status} onChange={props.onToggle} />
                })
            }
        </div>


    )
}