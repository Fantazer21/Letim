import React from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {AddItemForm} from '../AddItemForm';
import {Task} from "../Task";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export default {
    title: 'Task Component',
    component: Task,
} as Meta;

const changeTaskStatusCallback = action('Status Changed')

const changeTaskTitle = action('Title Changed')

const removeTask = action('Task removed')




export const AddItemFormBaseExample = (props: any) => {
    return <>
        <Task task={{id: '1',title: "Test title",isDone: true}}
              changeTaskStatus={changeTaskStatusCallback}
              changeTaskTitle={changeTaskTitle}
              removeTask={removeTask}
              todolistId={'Td1'}/>
        <Task task={{id: '2',title: "Test title2",isDone: true}}
              changeTaskStatus={changeTaskStatusCallback}
              changeTaskTitle={changeTaskTitle}
              removeTask={removeTask}
              todolistId={'Td2'}/>
    </>


}
