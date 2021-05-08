import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./ToDoList";
import {stat} from "fs";

// const newState = state.map((el: StateType) => el.id === id ? ({...el, status: !el.status}) : ({...el}));
export type StateType = {
    id: number,
    title: string,
    status: boolean
}


function App() {

    let [state, setState] = useState<StateType[]>([
            {id: 1, title: 'Buy bread', status: false},
            {id: 2, title: 'Buy milk', status: false},
            {id: 3, title: 'Buy butter', status: false},
        ]
    )


    function aaa(id: number, status: string) {

        const newState = state.map( el =>  (el.id === id) ? ({...el, status: !status}) : ({...el}))



        setState(newState)
    }

    return (
        <Todolist
            header={"Hello world"}
            todo={state}
            onToggle={aaa}
        />
    )
}

export default App
