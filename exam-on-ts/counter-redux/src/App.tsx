import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decAC, incAC} from "./reducers/counterReducers";
import {AppStateType} from "./reducers/store";


export function App() {
    let res = useSelector<AppStateType, number>(state => state.counter.startValue)

    let dispatch = useDispatch()

    const inc = () => {
        dispatch(incAC())
    }

    const dec = () => {
        dispatch(decAC())
    }
    return (
        <div className="App">
            <div>{res}</div>
            <button onClick={inc}>PLUS</button>
            <button onClick={dec}>MINUS</button>
        </div>
    );
}



