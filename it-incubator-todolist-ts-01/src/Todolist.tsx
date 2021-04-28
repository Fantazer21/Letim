import React, {ChangeEvent, KeyboardEvent, useState} from "react";


type PropsType = {
    id: string
    titleMain: 'What to learn' | 'What to do' | 'What to buy'
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: 'active' | 'completed' | 'all', todolistID: string) => void
    addTask: (title: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
    filter: 'active' | 'completed' | 'all'
}


type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}


export function TodoList(props: PropsType) {

    let [title, setTitle] = useState('')
    let [error,setError] =useState<string | null>('')

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
        if (title.trim() !== '') {
            props.addTask(title)
            setTitle('')
        } else {
            setError('Title is required');
        }
    }


    const onAllClickHandler = () => {
        props.changeFilter('all',  props.id)
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active', props.id)
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed', props.id)
    }

    return (
        <div>
            <h3>{props.titleMain}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                        className={error ? 'error' : ''}/>
                <button onClick={addTask}>+</button>
                {error && <div className='error-message'> {error} </div>}
            </div>
            <ul>
                {
                    props.tasks.map(el => {

                            const onClickHandler = () => props.removeTask(el.id)
                            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                let newIsDoneValue = e.currentTarget.checked;
                                props.changeTaskStatus(el.id, newIsDoneValue)
                            }
                            return <li key={el.id} className={el.isDone ? 'is-done' : ''}>
                                <input type="checkbox" checked={el.isDone} onChange={onChangeHandler}/>
                                <span>{el.title}</span>
                                <button onClick={onClickHandler}>x</button>
                            </li>
                        },
                    )
                }
            </ul>
            <div>
                <button className={props.filter === 'all' ? 'active-filter': ''} onClick={onAllClickHandler}>All</button>
                <button className={props.filter === 'active' ? 'active-filter': ''} onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === 'completed' ? 'active-filter': ''} onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )
}