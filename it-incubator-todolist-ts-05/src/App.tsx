import React, {useState} from 'react';
import './App.css';
import {Todolist, TaskType} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()


    let [todolists, setTodolists] = useState<Array<TodolistType>>([
            {id: todolistId1, title: 'What to do', filter: 'all'},
            {id: todolistId2, title: 'What to buy', filter: 'completed'}
        ]
    )

    let [tasks, setTasks] = useState<TasksStateType>({
            [todolistId1]: [
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: false},
                {id: v1(), title: "ReactJS", isDone: false},
            ],
            [todolistId2]: [
                {id: v1(), title: "Milk", isDone: true},
                {id: v1(), title: "Eggs", isDone: false},
            ]
        }
    );


    function removeTask(id: string, todolistId: string) {
        let filteredTasks = tasks[todolistId];

        tasks[todolistId] = filteredTasks.filter(t => t.id != id)

        setTasks({...tasks})
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false}

        let addTask = tasks[todolistId];
        tasks[todolistId] = [task, ...addTask]
        setTasks({...tasks})
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let toDoListTasks = tasks[todolistId1]

        let task = toDoListTasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks({...tasks});
    }


    function changeFilter(value: FilterValuesType, todolistID: string) {
        let todolist = todolists.find(el => el.id === todolistID)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }


    return (
        <div className="App">
            {
                todolists.map(td => {
                    let allTodolistTasks = tasks[td.id];
                    let tasksForTodolist = allTodolistTasks

                    if (td.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (td.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }
                    return <Todolist
                        key={td.id}
                        id={td.id}
                        title={td.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={td.filter}
                    />
                })
            }
        </div>
    );
}

export default App;
