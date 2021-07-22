import React, {useEffect, useState} from 'react';
import './App2.css';
import './CounterWithLS.css'
import {CounterMain} from "./Counter-main";


function App2() {

    let [counter, setCounter] = useState(1);

    let [maxState, setMaxState] = useState(10)

    let [minValue, setMinValue] = useState(0)

    useEffect(() => {
        let maxStateValue = localStorage.getItem('maxState')
        if (maxStateValue) {
            let newValue = JSON.parse(maxStateValue)
            setMaxState(newValue)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('maxState', JSON.stringify(maxState))
    }, [maxState])

    useEffect(() => {
        localStorage.setItem('minState', JSON.stringify(minValue))
    }, [minValue])


    const titles = ['Insert maximum and minimum Value', 'Incorrect value']

    const conditionDisabledMistake = (
        counter === maxState
    )

    function setMinimumState(value: number) {
        let val = value
        setMinValue(+val)
    }

    function setMaximumState(maxValue: number) {
        let temporaryMax = maxValue
        setMaxState(+temporaryMax)
    }

    function increaseValue(counter: number) {
        let newValue = +minValue + 1
        if (counter < maxState)
            setMinValue(+newValue)
    }

    function resetValue(val: number) {
        setCounter(+val)
        setMaxState(5)
        setMinValue(+val)
    }


    return (
        <div className={'mainPage'}>

            <CounterMain value={counter}
                         maxValue={maxState}
                         incValue={increaseValue}
                         resetValue={resetValue}
                         minValue={minValue}
                         conditionDisabled={conditionDisabledMistake}
                         title={titles}
                         setMinimumState={setMinimumState}
                         setMaximumState={setMaximumState}
            />

        </div>


    );
}

export default App2;
