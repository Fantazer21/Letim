// import React, from 'react'
import {ChangeEvent,useState} from "react";

type ManType = {
   name: string,
    age: number
    id: number
}


let people: Array<ManType> = [
{id: 1, name : 'Ilya Step', age : 32 },
{id: 2, name : 'Sergey Abc', age : 60 },
{id: 3, name : 'Vladimir Krug', age :  40},
]

function TestMap() {

    let [value,setValue]= useState('')

    const newPeople = people.map(
        el => {
            return <div key={el.id}> {el.name} </div>
        }
    )

    function showValue(e: ChangeEvent<HTMLInputElement>) {
         setValue(e.currentTarget.value)
        console.log(value)
    }

    function showValue2 () {
        return console.log('dssdsdsd')
    }
    return (
        <div>
            {newPeople}
            <input onChange={showValue} onClick={showValue2}/>
        </div>

    )
}


export default TestMap