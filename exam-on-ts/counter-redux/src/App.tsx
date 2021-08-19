import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decCreatorAC, incCreatorAC} from "./reducers/counterReducers";
import {AppStateType} from "./reducers/store";



function App() {
    let res = useSelector<AppStateType, number>(state => state.counter.startValue)

    let dispatch = useDispatch()

    const inc = () => {
        dispatch(incCreatorAC())
    }
    
    const dec = () => {
        dispatch(decCreatorAC())
    }
    return (
        <div className="App">
            <div>{res}</div>
            <button onClick={inc}>increment</button>
            <button onClick={dec}>decrement</button>
        </div>
    );
}

export default App;
