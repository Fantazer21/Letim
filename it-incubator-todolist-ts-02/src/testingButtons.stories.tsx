import React, {useState} from 'react';
import Button from "./testingButtons";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: Button
}

export const OnMode = () => <Button on={true}/>

export const ModeChange = () => {
    const[value, setValue] = useState<boolean>(true
    )
    return <Button on={value} onChange={setValue}/>
}