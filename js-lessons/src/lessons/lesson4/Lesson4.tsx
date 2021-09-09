import React from 'react'
import './lesson_4';

const Lesson4 = () => {
    // Task 01
    // Создайте промис, который постоянно находиться в состоянии pending.
    // В конструкторе промиса выведите в консоль сообщение "Promise is created".


    // const promiseTask1 = new Promise((resolve, reject) => {
    //     console.log('Promise is created')
    // })
    // console.log('Task 1 Status - ', promiseTask1)

    // Task 02
    // Создайте промис, который после создания сразу же переходит в состояние resolve
    // и возвращает строку 'Promise Data'
    // Получите данные промиса и выведите их в консоль

    // const promiseTask2 = Promise.resolve('Promise Data')
    // console.log('Task 2 Data', promiseTask2)

    // Task 03
    // Создайте промис, который после создания сразу же переходит в состояние rejected
    // и возвращает строку 'Promise Error'
    // Получите данные промиса и выведите их в консоль

    // const promiseTask3 = Promise.reject('Promise Error')
    // console.log("Task 3 - ", promiseTask3)

    // Task 04
    // Создайте промис, который переходит в состояние resolved через 3с.
    // (Используйте setTimeout)
    // и возвращает строку 'Promise Data'
    // Получите данные промиса и выведите их в консоль

    // const promiseTask4 =  new Promise( (res,rej) => {
    //     return setTimeout(() => res('Promise Data'), 3000)
    // } )
    // console.log( 'Task 4', promiseTask4 )


    // Task 05
    // Создайте литерал объекта handlePromise со следующими свойствами:
    // promise, resolve, reject, onSuccess, onError
    // Проинициализируйте первые три свойства null,
    // а последние два функциями, которые принимают один параметр и выводят
    // в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
    // вторая - `Promise is rejected with error: ${paramName}`
    // Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
    // Первый обработчик, создает промис, заполняет первые три свойства,
    // описаного выше объекта: свойство promise получает новый созданный промис,
    // свойства resolve и reject получают ссылки на соответствующие функции
    // resolve и reject. Следующие два обработчика запускают методы resolve и reject.

    type RejType = (reason?: any) => void
    type ResType = (value?: string | undefined) => void

    let handlePromise = {
        promise: null as Promise<string> | null,
        resolve: null as ResType | null,
        reject: null as RejType | null ,
        onSuccess: (paramName: any) => {
            console.log(`Promise is resolved with data: ${paramName}`)
        },
        onError: (paramName: any) => {
            console.log(`Promise is rejected with error: ${paramName}`)
        },
    }

    function createPromise () {
        handlePromise.promise = new Promise((res, rej) => {
            handlePromise.resolve = res;
            handlePromise.reject = rej;
        })

        handlePromise.promise.then(handlePromise.onSuccess)
        handlePromise.promise.catch(handlePromise.onError)

        console.log(handlePromise)
    }

    function resolvePromise () {
        handlePromise.resolve && handlePromise.resolve("Hello")
        console.log(handlePromise)
    }

    function rejectPromise () {
        handlePromise.reject && handlePromise.reject("Reject")
        console.log(handlePromise)
    }

    // Task 06
    // Создайте промис, который через 1 с возвращает строку "My name is".
    // Создайте функцию onSuccess, которая получает один параметр,
    // прибавляет к нему Ваше имя и возвращает новую строку из функции
    // Создайте функцию print, которая выводит в консоль значение своего параметра
    // Добавьте два метода then и передайте созданные функции.


     new Promise((res, rej) => {
         setTimeout(() => res('My name is'), 1000)
    })
         .then(data => onSuccess(`${data} step`))
         .then(data => print(data))


    function  onSuccess (param: string): string {
        return `Ilya ${param}`
    }


    function print(param: string) {
        console.log(param)
    }


    // Task 7
    // Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
    // второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
    // Получите результаты работы промисов, объедините свойства объектов
    // и выведите в консоль {name, age, city}

    const firstPromise = new Promise ((res) => {
         setTimeout(()=> res( {name: "Anna" }), 2000)
    })

    const secondPromise = new Promise ((res) => {
        setTimeout(()=> res( {age: 16}), 3000)
    })

    const thirdPromise = new Promise ((res) => {
        setTimeout(()=> res( {city: ''}), 4000)
    })

     Promise.all([firstPromise,secondPromise, thirdPromise]).then(data => {
             console.log(data)
         const test = data.reduce((acc: any, curr: any) => {
             return {...acc, ...curr}
         }, {})

         console.log(test)
         }
     )
    //[{name: 12}, {age: 24}] -> { name: 12, age: 24 }

    return (
        <div>
            <button id='btn-create-promise' onClick={createPromise}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={resolvePromise}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={rejectPromise}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;