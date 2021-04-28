import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistType ={
    id: string
    title: string
    filter: FilterValuesType
}
type TaskType = {
    id: string
    title: string
    isDone: Boolean
}

 export type TaskStateType ={
    [key: string] : Array<TaskType>
}

function App() {

    const todoListID_1 = v1()
    const todoListID_2 = v1()

    const [todoLists,settodoLists] = useState<TodolistType[]>([
        {id: todoListID_1, title: 'What to learn', filter: 'all'},
        {id: todoListID_2, title: 'What to buy', filter: 'completed'}
    ])

    const [tasks, setTasks] = useState<TaskStateType>({
        [todoListID_1]: [
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "ReactJS", isDone: false},
        ],
        [todoListID_2]: [
            {id: v1(), title: "MILK", isDone: true},
            {id: v1(), title: "Coffee", isDone: true},
        ]
    })




    let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(id: string, todoListID: string) {
        tasks[todoListID] = tasks[todoListID].filter(t => t.id != id)
        setTasks({...tasks});
    }

    function addTask(title: string, todoListID: string) {
        let task = {id: v1(), title: title, isDone: false};

        let todoListTasks = tasks[todoListID]
        tasks[todoListID] =[task,...todoListTasks]
        setTasks({...tasks,});
    }

    function changeStatus(taskId: string, isDone: boolean, todoListID: string) {
        let todoListTasks = tasks[todoListID]

        let task = todoListTasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks({...tasks});
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }







    return (
        <div className="App">

            {
                todoLists.map( tl=> {
                    let allTodolistTasks = tasks[tl.id];

                    let tasksForTodolist = allTodolistTasks;

                    if (filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }
                    return  <Todolist
                        title="What to learn"
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={filter}
                    />

                    }


                )
            }

        </div>
    );
}

export default App;
