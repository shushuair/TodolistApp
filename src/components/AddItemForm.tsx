import React, {ChangeEvent, KeyboardEvent, memo, useEffect, useState} from 'react';

export type AddItemFormPropsType = {
    callback: (value: string) => void
    storyError ?: string
}

export const AddItemForm = (props: AddItemFormPropsType) => {
    const {callback, storyError} = props

    useEffect(()=>{
        if (storyError) {
            setError(storyError)
        }
    },[])

    let [newTitle, setNewTitle] = useState("")
    let [error, setError] = useState<null | string>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
        setError(null)
    }

    const addTask = () => {
        if (newTitle.trim() !== "") {
            setNewTitle(newTitle.trim())
            callback(newTitle)
            setNewTitle("")
        } else {
            setError("This is not title!!")
            setNewTitle("")
        }
    }
    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask()
        }
    }

    const onClickHandler = () => {
        addTask()
    }


    return (
        <div>
            <input value={newTitle} onChange={onChangeHandler} onKeyDown={onKeyHandler}  />
            <button onClick={onClickHandler}>Add</button>
            {error && <h3>{error}</h3>}
        </div>
    );
}

