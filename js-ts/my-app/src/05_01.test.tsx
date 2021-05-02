import React from 'react'


// type ManType = {
//    name: string,
//     age: Number
// }

test("newPeople should get a stack", () => {
    //data
    let people = [
        {name : 'Ilya Step', age : 32 },
        {name : 'Sergey Abc', age : 60 },
        {name : 'Vladimir Krug', age :  40},
    ]

    let devs = [
        {stack: ['js','html','React','Vue'] },
        {stack: ['js','html','Css','React'] },
        {stack: ['js','html','Angular','Vue'] }
    ]
    //action
    let messages = people.map( el => `Hello ${el.name}.Welcome to It-Incubator`)
    //res
    expect(messages[0]).toBe('Hello Ilya Step.Welcome to It-Incubator')

})




