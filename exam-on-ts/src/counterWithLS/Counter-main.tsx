import React, {useState} from "react";
import {CounterSettings} from "./Counter-settings";
import {Header} from "./Header";
import  './CounterWithLS.css'


export type CounterMainType = {
    value: number
    incValue: (value: number) => void
    resetValue: (value: number) => void
    maxValue: number
    minValue: number
    conditionDisabled: any
    title: Array<string>
    setMinimumState: (value: number) => void
    setMaximumState: (value: number) => void

}

export function CounterMain(props: CounterMainType) {

    let [toggle, setToggle] = useState(true)

    const disabledInc = props.minValue === props.maxValue
        || props.minValue >= props.maxValue
        || props.maxValue === props.value;

    function settings() {
        let copy = toggle
        setToggle(!copy)
    }

    const header = <Header
        minValue={props.minValue}
        maxValue={props.maxValue}
        startValue={props.value}
        mistakes={props.conditionDisabled}
        setTitle={props.title}
    />;
    const counterSettings = <CounterSettings
        conditionDisabled={true}
        minValue={props.minValue}
        maxValue={props.maxValue}
        setMinimumState={props.setMinimumState}
        setMaximumState={props.setMaximumState}
    />

    return (
        <div>
            <div className='main1'>
                <div className='header1'>
                        {(toggle === true) ? header : counterSettings}
                </div>
                <div className='buttons1'>
                    <button
                        disabled={disabledInc || toggle === false}
                        className='Inc1'
                        onClick={() => props.incValue(props.value)}
                        >INC
                    </button>
                    <button className='Reset1' onClick={() => props.resetValue(0)}>RESET</button>
                    <button className='Set1' onClick={settings}>SET</button>
                </div>
            </div>
        </div>
    )
}

