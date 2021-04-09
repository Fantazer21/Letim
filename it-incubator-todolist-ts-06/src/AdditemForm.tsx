import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}


function AddItemForm (props: AddItemFormPropsType) {
    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const addItem = () => {
        const trimmedTitle =title.trim()
        if(trimmedTitle) {
            props.addItem(trimmedTitle, props.id)
        }else {
            setError('Title is required')
        }
        setTitle('')
    }
    const onKeyPressAddTAsk = (e: ChangeEvent<HTMLInputElement> => {
        if (e.key === 'Enter') {
            addItem()
        }
    })

    return (
        <h3>{props.title}<button onClick={removeTodoList}>x</button></h3>

    )
}