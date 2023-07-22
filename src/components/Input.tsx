import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


export type InputPropsType = {
    callback: (value: string) => void
}

export const Input = (props: InputPropsType) => {
    const {callback} = props

    let [newTitle, setNewTitle] = useState("")
    let [error, setError] = useState<null | string>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const addTask = () => {
        if (newTitle.trim() !== "") {
            setNewTitle(newTitle.trim())
            callback(newTitle)
            setNewTitle("")
        } else {
            setError("This is not title!!")
        }
    }


    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask()
        }
    }


    return (
        <>
            <input value={newTitle} onChange={onChangeHandler} onKeyDown={onKeyHandler}/>
            {error && <h3>{error}</h3>}
        </>

    )
        ;
};
