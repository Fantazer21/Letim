import React, {useState} from 'react';
import './App.css';
import './Counter.css'
import {CounterMain} from "./Counter-main";
import {CounterSettings} from "./Counter-settings";



function App() {

    let [counter, setCounter] = useState(0);

    let [maxState, setMaxState] = useState(1)

    let [minValue, setMinValue] = useState(0)

    const titles = ['Insert maximum and minimum Value', 'Incorrect value']

     const conditionDisabledMistake = (
         counter === maxState
         || counter > maxState
         || maxState <= minValue
         || minValue < 0
     )

    function setMinimumState(value: number) {
        let val = value
        setMinValue(val)
         console.log( `This is minimal value ${minValue}`)
    }


    function setMaximumState(maxValue: number) {
        let temporaryMax = maxValue
        setMaxState(temporaryMax)
         console.log(`This is maximum state ${maxValue}`)
    }

    function setMinimumValue(minValue: number) {
        let tempMinVal = minValue

        setCounter(tempMinVal)
        console.log(`Minimal state ${counter} maximum value ${maxState}`)
    }

    function increaseValue(counter: number) {
        let newValue = +counter + 1
        if (counter < maxState)
            setCounter(newValue)
        console.log(`counter ${counter}`)
    }

    function resetValue(val: number) {
        setCounter(val)
        setMaxState(1)
        setMinValue(val)
    }


    return (
        <div className={'mainPage'}>

            <CounterMain value={counter}
                         maxValue={maxState}
                         incValue={increaseValue}
                         resetValue={resetValue}
                          minValue={counter}
                         conditionDisabled={conditionDisabledMistake}
                         title={titles}
            />
            <CounterSettings
                minValue={minValue}
                maxValue={maxState}
                value={counter}
                setMinimumState={setMinimumState}
                setMinimumValue={setMinimumValue}
                setMaximumState={setMaximumState}
                conditionDisabled={conditionDisabledMistake}
            />
        </div>


    );
}

export default App;
