import React from "react";
import {ErrorTypes} from "./App";

type HeaderType = {
    valueHeader: number | ErrorTypes
    minValue: number
    value: number
}

export function Header(props: HeaderType) {
    return (
        <div>
            {
                 (props.valueHeader == 0 && props.minValue == 0) ?
                 <span>Insert maximum and minimum Value</span> :
                props.value
            }
        </div>


    )
}