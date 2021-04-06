import React, {useState} from 'react'


type ButtonType = {
    on: boolean,
    // title: string
}


const Button = (props: ButtonType) => {

    // let on = true

    const styleFirst = {
        width: '30px',
        height: '30px',
        border: 'solid 1px',
        marginTop: '10px',
        paddingLeft: '10px',
    }

    let [on, setOn] = useState(false)


    const styleOn = {
        width: '30px',
        height: '30px',
        border: 'solid 1px',
        marginTop: '10px',
        paddingLeft: '10px',
        backgroundColor: on ? 'red' : 'green'
    }

    const styleOff = {
        width: '30px',
        height: '30px',
        border: 'solid 1px',
        marginTop: '10px',
        paddingLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={styleOn} onClick={() => setOn(true)}>On</div>
            <div style={styleOff} onClick={() => setOn(true)}>Off</div>
            <div></div>
        </div>
    )


}

export default Button
