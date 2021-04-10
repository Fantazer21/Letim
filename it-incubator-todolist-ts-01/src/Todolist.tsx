import React, {useState} from "react";


type PropsType = {
    titleMain: 'What to learn' | 'What to do' | 'What to buy'
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: 'active' | 'completed' | 'all') => void
    addTask: (title: string) => void

}


type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}


export function TodoList(props: PropsType) {

    let [title, setTitle] = useState('')

    return (
        <div>
            <h3>{props.titleMain}</h3>
            <div>
                <input   value={title} onChange={e => setTitle(e.currentTarget.value)}/>
                <button onClick={() => {
                    props.addTask(title);
                    setTitle('')
                }} >+</button>

            </div>
            <ul>
                {
                    props.tasks.map(
                        el => {
                            return <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={() => props.removeTask(el.id)}>x</button>
                            </li>
                        },
                    )
                }
            </ul>
            <div>
                <button onClick={() => props.changeFilter('all')}>All</button>
                <button onClick={() => props.changeFilter('active')}>Active</button>
                <button onClick={() => props.changeFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}