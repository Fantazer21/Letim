import React, {ChangeEvent, KeyboardEvent, useState} from "react";


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

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(title)
            setTitle('')
        }
    }

    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }


    const onAllClickHandler = () => {
        props.changeFilter('all')
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed')
    }

    return (
        <div>
            <h3>{props.titleMain}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={addTask} >+</button>

            </div>
            <ul>
                {
                    props.tasks.map(el => {
                        const onClickHandler = () => props.removeTask(el.id)
                            return <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={onClickHandler}>x</button>
                            </li>
                        },
                    )
                }
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )
}