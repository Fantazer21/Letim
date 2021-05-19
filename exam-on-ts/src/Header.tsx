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
            return <span style={textStyleMistake}>{props.setTitle[1]}</span>
        }
        if( (props.minValue === 0 && props.maxValue === 1) || props.startValue === 0) {
            return <span>{props.setTitle[0]}</span>
        }
        if( props.minValue)
            return <span>{ props.minValue}</span>


    }

    return (
        <div>
            {condition( )  }
        </div>
    )
}