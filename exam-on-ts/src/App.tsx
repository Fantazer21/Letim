import React, {useState} from 'react';
import './App.css';
import './Counter.css'
import {CounterMain} from "./Counter-main";
import {CounterSettings} from "./Counter-settings";


export type ErrorTypes = 'Insert maximum and minimum Value' | 'Incorrect value'


function App() {

    let [counter, setCounter] = useState(0);

    let [maxState, setMaxState] = useState(0)

    let[minValue, setMinValue] =  useState(0)
    let [error, setError] = useState<Array<ErrorTypes>>([
        'Insert maximum and minimum Value',
        'Incorrect value'
    ])

    function setMinimumState(value: number) {
        let val = value
        setMinValue(val)
        // console.log( `This is minimal value ${minValue}`)
    }



    function setMaximumState(maxValue: number) {
        let temporaryMax = maxValue
        setMaxState(temporaryMax)
        // console.log(`This is maximum state ${maxValue}`)
    }

    function setMinimumValue(minValue: number) {
        let tempMinVal = minValue

        setCounter(tempMinVal)
        console.log(  `Minimal state ${counter} maximum value ${maxState}`)
    }

    function increaseValue(counter: number) {
        let newValue = +counter + 1
        if(counter < maxState)
            setCounter(newValue)
    }

    function resetValue(val: number) {
        setCounter(val)
    }


    return (
        <div className={'mainPage'}>

            <CounterMain value={counter}
                         maxValue={maxState}
                         incValue={increaseValue}
                         resetValue={resetValue}
                         minValue={counter}
            />
            <CounterSettings
                minValue={minValue}
                setMinimumState={setMinimumState}
                setMinimumValue={setMinimumValue}
                setMaximumState={setMaximumState}
                />
        </div>


    );
}

export default App;
