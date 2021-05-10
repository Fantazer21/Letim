import React, {MouseEventHandler} from "react";
import './Counter.css'


type CounterMainType = {
    value: number
    incValue: (value: number) => void
    resetValue: (value: number) => void
}


export function CounterMain(props: CounterMainType) {


    return (
        <div>
            <div className='main'>
                <div className='header'><h1>{props.value}</h1></div>
                <div className='buttons'>
                    <button className='Inc' onClick={() => props.incValue(props.value)}>Inc
                    </button>
                    <button className='Reset' onClick={() => props.resetValue(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
}

