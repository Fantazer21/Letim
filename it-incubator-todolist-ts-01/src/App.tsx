import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./Todolist";
import {v1} from "uuid";

type todolistType = {
    id: string
    title: 'What to learn' | 'What to do' | 'What to buy'
    filter: 'active' | 'completed' | 'all'
}

function App() {

    let [todolists, setTodolists] = useState<Array<todolistType>>(
        [
            {
                id: v1(),
                title: 'What to learn',
                filter: 'active'
            },
            {
                id: v1(),
                title: 'What to do',
                filter: 'completed'
            },

        ]
    )
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

    let [clear, setClear] = useState('')

    function removeTask(id: string) {
        let tasks2 = tasks1.filter(el => el.id !== id)
        setTasks1(tasks2)
    }

    let filteredTasks = tasks1

    function addTask(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        }
        let newTasks = [newTask, ...tasks1]
        setTasks1(newTasks)
    }

    function changeFilter(value: 'active' | 'completed' | 'all', todolistID: string) {
       let todolist = todolists.find(el => el.id === todolistID);
       if(todolist) {
           todolist.filter = value;
           setTodolists([...todolists])
       }
    }

    function changeStatus(id: string, isDone: boolean) {
        let task = tasks1.find(el => el.id === id)
        if (task) {
            task.isDone = isDone;
            setTasks1([...tasks1])
        }
    }

    return (
        <div className="App">
            {
                todolists.map(el => {
                    let tasksForTodolist = tasks1

                    if (el.filter === 'active') {
                        filteredTasks = tasks1.filter(el => el.isDone === false)
                    }

                    if (el.filter === 'completed') {
                        filteredTasks = tasks1.filter(el => el.isDone === true)
                    }

                    return <TodoList
                        key={el.id}
                        id={el.id}
                        titleMain={el.title}
                        tasks={filteredTasks}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={el.filter}
                    />
                })
            }
        </div>
    );
}


export default App;
