import React, {useState,ChangeEvent,MouseEventHandler} from "react";

type ValueType ={
    onChange: (on: boolean) => void
    value: boolean
}

function OnOff(props: ValueType) {



    const main = {
        display: 'flex'
    }

    const onStyle= {
        width: '50px',
        height: '50px',
        backgroundColor:  props.value ? 'red' : 'green',
        marginRight: '20px'
    }

    const offStyle = {
        width: '50px',
        height: '50px',
        backgroundColor: props.value ? 'green' : 'red',
        marginRight: '20px',
    }


    return (
        <div style={main}>
            <div style={onStyle} onClick={() => props.onChange(true)}>ON</div>
            <div style={offStyle} onClick={() =>props.onChange(false)}>OFF</div>
        </div>
    )
}

export default OnOff