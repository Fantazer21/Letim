import React, {ChangeEvent, useCallback} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {keys} from "@material-ui/core/styles/createBreakpoints";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export const Todolist = React.memo(function(props: PropsType) {
    console.log('TodoList called')

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    }, [props.addTask, props.id])

    const removeTodolist = useCallback(() => {
        props.removeTodolist(props.id);
    }, [props.removeTodolist, props.id])
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.id, title);
    }, [props.changeTodolistTitle, props.id])

    const onAllClickHandler = useCallback(() => {props.changeFilter("all", props.id)}, [props.changeFilter , props.id]);
    const onActiveClickHandler = useCallback(() => {props.changeFilter("active", props.id)}, [props.changeFilter , props.id]);
    const onCompletedClickHandler = useCallback(() => {props.changeFilter("completed", props.id)}, [props.changeFilter , props.id]);

    let tasksForTodolist = props.tasks

    if (props.filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true);
    }


    return <div>
        <h3> <EditableSpan value={props.title} onChange={changeTodolistTitle} />
            <IconButton onClick={removeTodolist}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                props.tasks.map(t => <TaskMap
                key={props.id}
                task={t}
                changeTaskStatus={props.changeTaskStatus}
                removeTask={props.removeTask}
                changeTaskTitle={props.changeTaskTitle}
                todolistId={props.id}
                    />
                )
            }
        </div>
        <div style={{ paddingTop: "10px"}}>
            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'default'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})

type taskMapType = {
    removeTask: (taskId: string, todoListId: string) => void
    changeTaskStatus: (taskId: string, newTitle: boolean, todoListId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todoListId: string) => void
        task: TaskType
    todolistId: string
}

const  TaskMap = (props: taskMapType) => {

        const onClickHandler = () => props.removeTask(props.task.id, props.todolistId)

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked;
            props.changeTaskStatus(props.task.id, newIsDoneValue, props.todolistId);
        }
        const onTitleChangeHandler = (newValue: string) => {
            props.changeTaskTitle(props.task.id, newValue, props.todolistId);
        }


        return <div key={props.task.id} className={props.task.isDone ? "is-done" : ""}>
            <Checkbox
                checked={props.task.isDone}
                color="primary"
                onChange={onChangeHandler}
            />

            <EditableSpan value={props.task.title} onChange={onTitleChangeHandler} />
            <IconButton onClick={onClickHandler}>
                <Delete />
            </IconButton>
        </div>

}


