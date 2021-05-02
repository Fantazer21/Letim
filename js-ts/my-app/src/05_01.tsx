import React from 'react'
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

    const newPeople = people.map(
        el => {
            return <div key={el.id}> {el.name} </div>
        }
    )
    return (
        <div>
            {newPeople}
        </div>

    )
}


export default TestMap