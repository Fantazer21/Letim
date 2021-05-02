import React, {useState} from "react";

type ValueType ={

}

function OnOff(props: ValueType) {

    let [on,setOn]= useState(true)

    const main = {
        display: 'flex'
    }

    const onStyle= {
        width: '50px',
        height: '50px',
        backgroundColor:  on ? 'red' : 'green',
        marginRight: '20px'
    }

    const offStyle = {
        width: '50px',
        height: '50px',
        backgroundColor: on ? 'green' : 'red',
        marginRight: '20px',
    }


    return (
        <div style={main}>
            <div style={onStyle} onClick={() => setOn(false)}>ON</div>
            <div style={offStyle} onClick={() => setOn(false)}>OFF</div>
        </div>
    )
}

export default OnOff