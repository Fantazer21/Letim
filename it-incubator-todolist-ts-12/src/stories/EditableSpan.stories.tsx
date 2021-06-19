import React from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "../EditableSpan";

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}


export default {
    title: 'TodoLists/EditableSpan',
    component: EditableSpan,
    argTypes: {
        onChange: {
            description: 'Value Editable Span'
        }
    },
    value: {
        defaultValue: 'HTML',
        description: 'Start Value EditableSpan'
    }
} as Meta;

const Template: Story<EditableSpanPropsType> = (args) => <EditableSpan {...args} />;

export const EditableSpanExample = Template.bind({});
EditableSpanExample.args = {
    onChange: action('Value Editable Span')
};
//test 2