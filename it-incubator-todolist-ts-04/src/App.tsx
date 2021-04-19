import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodoLists = {
    id: string,
    title: string,
    filter: FilterValuesType
}


function App() {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todoLists, setTodoLists] = useState<Array<TodoLists>>([
        {id: todolistId1, title: 'What to buy', filter: 'all'},
        {id: todolistId2, title: 'What to do', filter: 'completed'}
    ])


    let [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: false},
            {id: v1(), title: "Rest API", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Coffee", isDone: true},
        ]

    });

    function removeTask(id: string, todolistId: string) {
        let todolistTasks = tasks[todolistId];
         let filteredTasks= todolistTasks.filter(t => t.id != id)
        tasks[todolistId] = filteredTasks
        setTasks({...tasks});
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = [task, ...todolistTasks]
        setTasks({...tasks});
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        let todolistTasks = tasks[todolistId]
        let task = todolistTasks.find(el => el.id === id)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }


    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todoLists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodoLists([...todoLists])
        }
        // setFilter(value);
    }

    return (
        <div className="App">
            {
                todoLists.map(tl => {
                    let allTodoListTasks = tasks[tl.id]


                    let tasksForTodolist = allTodoListTasks;




                    if (tl.filter === "active") {
                        tasksForTodolist = allTodoListTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodoListTasks.filter(t => t.isDone === true);
                    }


                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                    />
                })

            }
        </div>
    );
}

export default App;
