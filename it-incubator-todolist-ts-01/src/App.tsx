import React from 'react';
import './App.css';
import Todolist from './Todolist'
import Todolist2 from "./Todolist2";

const App = () => {

        const tasks1 = [
            {id: 1, title: 'HTML&CSS', isDone : true},
            {id: 2, title: 'JS', isDone : true},
            {id: 3, title: 'ReactJs', isDone : true}
        ]

        const tasks2 = [
                {id: 1, title: 'Hello World', isDone : true},
                {id: 2, title: 'i am happy', isDone : false},
                {id: 3, title: 'Yo', isDone : false}
            ]
        const tasks3 = [
            {id: 1, title: 'Hello World', isDone : true},
            {id: 2, title: 'i am happy', isDone : true},
            {id: 3, title: 'Yo', isDone : false}
        ]
    const tasks4 = [
        {id: 1, title: 'Hello World', isDone : true},
        {id: 2, title: 'i am happy', isDone : true},
    ]
    return (
        <div className="App">
            <Todolist title ='What to learn' tasks={tasks1}/>
            <Todolist title ='Songs' tasks={tasks2}/>
            <Todolist title={'Title3 test'} tasks={tasks3}/>
            <Todolist2 title={'Todolist2'} tasks={tasks4} />
        </div>
    )
}
export default App;
