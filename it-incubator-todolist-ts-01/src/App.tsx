import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./Todolist";
import {v1} from "uuid";


function App() {

    let [tasks1, setTasks1] = useState([
        {
            id: v1(),
            title: "HTMl",
            isDone: true
        },
        {
            id: v1(),
            title: "css",
            isDone: false
        },
        {
            id: v1(),
            title: "figma",
            isDone: true
        },
        {
            id: v1(),
            title: "adobe",
            isDone: true
        },
        {
            id: v1(),
            title: "paint",
            isDone: false
        }
    ])
    let [clear, setClear ] = useState('')

    let [filter, setFilter] = useState<'active' | 'completed' | 'all'>()



    function removeTask(id: string) {
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

    function changeFilter(value: 'active' | 'completed' | 'all') {
        setFilter(value)
    }

    function addTask(title: string) {
        let newTask = {
                id: v1(),
                title: title,
                isDone: false
            }
            let newTasks = [newTask,...tasks1]
        setTasks1(newTasks)
    }

    function changeStatus(id: string, isDone: boolean) {
        let task = tasks1.find(el => el.id === id)
       if(task) {
           task.isDone = isDone;
           setTasks1([...tasks1])
       }
    }

    return (
        <div className="App">
            <TodoList titleMain={'What to learn'}
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}


export default App;
