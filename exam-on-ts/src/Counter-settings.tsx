import React, {ChangeEvent} from "react";
import './CounterSettings.css'

type TypeCounterSettings = {
    setMinimumState: any
    minValue: number
    setMinimumValue: any
    setMaximumState: any
    maxValue: number
    value: number
    conditionDisabled: any
}

export function CounterSettings(props: TypeCounterSettings) {


    const styleButtonDisabled = {
        backgroundColor: props.conditionDisabled ? '#688c96' : ''
    }

    return (
        <div className='mainSettings'>
            <div className={'headerSettings'}>
                <div>
                    <span>Max value</span>
                    <input
                        type={'number'}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => props.setMaximumState(e.currentTarget.value)}
                        value={props.maxValue}/>
                </div>
                <div>
                    <span>Start value</span> <input
                    type={'number'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => props.setMinimumState(e.currentTarget.value)}
                    value={props.minValue}/>
                </div>
            </div>
            <div className={'buttonsSettings'}>
                <button className={'Set'}
                        style={styleButtonDisabled}
                        onClick={() => props.setMinimumValue(props.minValue)}
                        disabled={props.minValue >= props.maxValue}> SET
                </button>
            </div>
        </div>
    )
}

