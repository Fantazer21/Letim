import React from "react";


type HeaderType = {
    mistakes: any
    setTitle: Array<string>
    startValue: number
    minValue: number
    maxValue: number
}

export function Header(props: HeaderType) {

    const textStyleMistake = {
        color: 'red',
        fontSize: '40px'
    }

    // props.setTitle[0]
    const condition = () => {
        if (props.mistakes) {
            return <h1 style={textStyleMistake}>{props.minValue}</h1>
        }
        if(props.minValue === props.maxValue) {
            return <h1 style={textStyleMistake}>{props.minValue}</h1>
        }
        if ((props.minValue > props.maxValue || props.minValue < 0  || (props.minValue > 0 && props.maxValue < 0 ))) {
            return <h1 style={textStyleMistake}>INCORRECT</h1>
        }
        // if (props.minValue)
            return <h1>{props.minValue}</h1>

    }

    return (
        <div>
            {condition()}
        </div>
    )
}