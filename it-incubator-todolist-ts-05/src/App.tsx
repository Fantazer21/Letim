import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

function App() {
    let todoListId1 = v1();
    let todoListId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>(
        [
            {id: todoListId1, title: "What to learn", filter: 'all'},
            {id: todoListId2, title: "What to buy", filter: 'all'}
        ]
    )
    let [tasks, setTasks] = useState({
        [todoListId1]: [
            {id: v1(), title: "Css", isDone: false},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todoListId2]: [
            {id: v1(), title: "Html", isDone: false},
            {id: v1(), title: "Typescript", isDone: false}
        ]
    })


    let [filter, setFilter] = useState<FilterValuesType>('all')


    function removeTask(id: string, todoListId: string) {
        let todolistTasks = tasks[todoListId];
        tasks[todoListId] = todolistTasks.filter(t => t.id != id)
        setTasks({...tasks})
    }


    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = [task, ...todolistTasks];
        setTasks({...tasks})
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
       let todolistTasks = tasks[todolistId]
        let task = todolistTasks.find(el => el.id === id)
        if(task) {
            task.isDone = isDone;
            setTasks({...tasks})
        }
    }


    let tasksForTodolist = tasks;





    return (
        <div className="App">
            {

                todolists.map(el => {
                    let allTodolistTasks = tasks[el.id]
                    let tasksForTodolist = allTodolistTasks;

                    if (el.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                    }
                    if (el.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                    }
                    return <Todolist
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={el.filter}/>
                })
            }
        </div>
    );
}

export default App;
