import React, {ChangeEvent} from "react";
import './CounterSettings.css'

type TypeCounterSettings = {
    setMinimumState: any
    minValue: number
    setMinimumValue: any
    setMaximumState: any
}

export function CounterSettings(props:  TypeCounterSettings) {


    return (
        <div className='mainSettings'>
            <div className={'headerSettings'}>
                <div>
                    <span>Max value</span> <input type={'number'} onChange={ (e: ChangeEvent<HTMLInputElement>) =>  props.setMaximumState (e.currentTarget.value) }/>
                </div>
                <div>
                    <span>Start value</span> <input type={'number'}  onChange={(e: ChangeEvent<HTMLInputElement>) => props.setMinimumState(e.currentTarget.value)}/>
                </div>
            </div>
            <div className={'buttonsSettings'}>
                <button className={'Set'} onClick={() => props.setMinimumValue(props.minValue)}> SET</button>
            </div>
        </div>
    )
}

