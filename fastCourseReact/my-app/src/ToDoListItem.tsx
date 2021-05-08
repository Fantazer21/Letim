import React,{MouseEventHandler} from "react";


export function ToDoListItem(props: any) {
    const listStyle = {
        listStyle: 'none',
        margin: "30px"
    }
    let isDone = {
        textDecoration: props.status === true ? "line-through" : ''
    }

    return (
        <li key={props.id}
            style={listStyle}>
            {props.id}
            <input type='checkbox' onClick={() => props.onChange(props.id, props.status)}/>
            <span style={isDone}> {props.title} </span>
        </li>
    )
}