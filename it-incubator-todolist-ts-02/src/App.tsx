import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import Button from './testingButtons'

import UnContr from "./UncontrolledAccordion";

import  UncRating from './UncontrolledRating'

export type filterValuesType = 'all'|'active'|'completed'


function App() {
    let [tasks1, setTask] = useState(
        [
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false},
            {id: 4, title: "Redux", isDone: false},
            {id: 5, title: "Python", isDone: true}
        ]
    )

    let filteredTasks = tasks1

    let [filter, filterTask] = useState<filterValuesType>('all')

    if (filter === 'active') {
       filteredTasks = tasks1.filter(el => el.isDone === false)
    }
    if (filter === 'completed') {
        filteredTasks = tasks1.filter(el => el.isDone === true)
    }

    function changeFilter(value: 'all'|'active'|'completed' ) {
        filterTask(value)
    }

    function removeTask(id: number) {
        let filteredTasks = tasks1.filter(el => el.id !== id)
        setTask(filteredTasks)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={filteredTasks} removeTask={removeTask} changeFilter={changeFilter}  />
            <Button/>
            <UncRating/>
            <UnContr/>
        </div>
    );
}

export default App;
