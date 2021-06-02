import React from "react";
import './Counter.css'
import {Header} from "./Header";


export type CounterMainType = {
    value: number
    incValue: (value: number) => void
    resetValue: (value: number) => void
    maxValue: number
    minValue: number
    conditionDisabled: any
    title: Array<string>

}


export function CounterMain(props: CounterMainType) {

    const disabledInc = props.minValue === props.maxValue
        || props.minValue >= props.maxValue
        || props.maxValue === props.value;
    return (
        <div>
            <div className='main'>
                <div className='header'>
                    <h1>
                        <Header
                            minValue={props.value}
                                maxValue={props.maxValue}
                                startValue={props.value}
                                mistakes={props.conditionDisabled}
                                setTitle={props.title}
                        />
                    </h1>
                </div>
                <div className='buttons'>
                    <button
                        // style={styleButtonDisabled}
                            disabled={disabledInc}
                            className='Inc'
                            onClick={() => props.incValue(props.value)}> INC
                    </button>
                    <button className='Reset' onClick={() => props.resetValue(0)}>RESET</button>
                </div>
            </div>
        </div>
    )
}

