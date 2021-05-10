import React, {useState} from 'react';
import './App.css';
import './Counter.css'
import {CounterMain} from "./Counter-main";


function App() {
    let [counter, setCounter] = useState(0);


    function increaseValue(counter: number) {
        let newValue = counter + 1
        if (counter < 5) {
            setCounter(newValue)
        }

    }

    function resetValue(val: number) {
        setCounter(val)
    }


    return (
        <CounterMain value={counter}
                     incValue={increaseValue}
                     resetValue={resetValue}
        />
    );
}

export default App;
