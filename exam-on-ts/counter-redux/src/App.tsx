import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";



function App() {
    let res = useSelector<any, any>(state => state.counter)
    let dispatch = useDispatch()

    return (
        <div className="App">
            <div>{res}</div>
            <button onClick={ (() => dispatch({type: 'INC'}))}>increment</button>
            <button onClick={(() => dispatch({type: 'DEC'}))}>decrement</button>
        </div>
    );
}

export default App;
