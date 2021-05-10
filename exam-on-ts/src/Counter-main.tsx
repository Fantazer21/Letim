import React from "react";
import './Counter.css'
import {Header} from "./Header";


export type CounterMainType = {
    value: number
    incValue: (value: number) => void
    resetValue: (value: number) => void
    maxValue: number
    minValue: number
}


export function CounterMain(props: CounterMainType) {
    const styleButton = {
        backgroundColor: props.value == props.maxValue ? '#688c96' : ''
    }


    return (
        <div>
            <div className='main'>
                <div className='header'>
                    <h1>
                        <Header valueHeader={props.value} minValue={props.minValue} value={props.value} />
                    </h1>
                </div>
                <div className='buttons'>
                    <button style={styleButton} disabled={props.value == props.maxValue} className='Inc'
                            onClick={() => props.incValue(props.value)}>INC
                    </button>
                    <button className='Reset' onClick={() => props.resetValue(0)}>RESET</button>
                </div>
            </div>
        </div>
    )
}

