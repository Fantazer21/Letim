import React, {ChangeEvent} from "react";
import './CounterWithLS.css'

type TypeCounterSettings = {
    conditionDisabled: boolean,
    minValue: number,
    maxValue: number,
    setMinimumState: (value: any) => void
    setMaximumState: (value: any) => void
}

export function CounterSettings(props: TypeCounterSettings) {

    return (

        <div className={'headerSettings1'}>
            <div className={'headerSettingsElements1'}>
                <h3>MAX VALUE </h3>
                <input
                    type={'number'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => props.setMaximumState(e.currentTarget.value)}
                    value={props.maxValue}/>
            </div>
            <div className={'headerSettingsElements1'}>
                <h3>START VALUE </h3><input
                type={'number'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => props.setMinimumState(e.currentTarget.value)}
                value={props.minValue}/>
            </div>
        </div>
    )
}

