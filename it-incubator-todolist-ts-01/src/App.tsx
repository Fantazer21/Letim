import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./Todolist";


function App() {

    let [tasks1, setTasks1] = useState([
        {
            id: 1,
            title: "HTMl",
            isDone: true
        },
        {
            id: 2,
            title: "css",
            isDone: false
        },
        {
            id: 3,
            title: "figma",
            isDone: true
        },
        {
            id: 4,
            title: "adobe",
            isDone: true
        },
        {
            id: 5,
            title: "paint",
            isDone: false
        }
    ])

    let [filter, setFilter] = useState<'active'| 'completed' | 'all'>()



    function removeTask(id: number) {
        let tasks2 = tasks1.filter(el => el.id !== id)
        setTasks1(tasks2)
    }

    let filteredTasks = tasks1

    if (filter === 'active') {
        filteredTasks = tasks1.filter(el => el.isDone === false)
    }
    if (filter === 'completed') {
        filteredTasks = tasks1.filter(el => el.isDone === true)
    }
    function changeFilter(value: 'active'| 'completed' | 'all' )  {
        setFilter(value)
    }
    return (
        <div className="App">
            <TodoList titleMain={'What to learn'}
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      changeFilter={changeFilter} />
        </div>
    );
}


export default App;
