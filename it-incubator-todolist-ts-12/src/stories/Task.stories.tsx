import React from 'react';
import { Story, Meta} from '@storybook/react';
import {Task} from '../Task';
import {action} from '@storybook/addon-actions';
import {TaskType} from "../Todolist";

type TaskPropsType = {
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    task: TaskType
    todolistId: string
}

const changeTaskStatusCallBack = action('Change status clicked');
const changeTaskTitleCallBack = action('Change title clicked');
const removeTaskCallBack= action('Remove task clicked');

export default {
    title: 'Todolist/Task',
    component: Task,
} as Meta;

const Template: Story<TaskPropsType> = (args) => <Task {...args} />;

const baseArgs = {
    changeTaskStatus: changeTaskStatusCallBack,
    changeTaskTitle: changeTaskTitleCallBack,
    removeTaskCallBack: removeTaskCallBack,
}

export const TaskIsDoneExample = Template.bind({});
TaskIsDoneExample.args = {
    ...baseArgs,
    task: {id: '1', title: 'JS', isDone: true},
    todolistId: 'todolistId1',
}

export const TaskIsNotDoneExample = Template.bind({});
TaskIsNotDoneExample.args = {
    ...baseArgs,
    task: {id: '2', title: 'HTML', isDone: false},
    todolistId: 'todolistId2',
};
