import React, {useCallback} from 'react';
import {Checkbox} from "../Checkbox/Checkbox";
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {newCheckedStatusAC, newTitleTaskAC, removeTaskAC} from "../reducers/tasksReducer";
import EditableSpan from "../EditableSpan/EditableSpan";

export type TaskPropsType = {
    todolistID: string
    taskID: string
    taskTitle: string
    checked: boolean
}


export const Task = (props: TaskPropsType) => {
    const {todolistID, taskID, taskTitle, checked} = props
    const dispatch = useDispatch()
    const removeTask = () => {
        dispatch(removeTaskAC(todolistID,taskID))
    }
    const newCheckedStatus=useCallback(()=>{
        dispatch(newCheckedStatusAC(todolistID,taskID))
    },[dispatch, todolistID, taskID])
    const newTitleTask= useCallback((newTitle:string)=>{
        dispatch(newTitleTaskAC(todolistID,taskID,newTitle))
    },[dispatch, taskID, todolistID])
        return (
            <div className={checked ? 'isDone' : ''}>
                <EditableSpan value={taskTitle} onChange={newTitleTask}/>
                <Checkbox callback={newCheckedStatus} statusChecked={checked}/>
                <Button name={"X"} callback={removeTask}/>
            </div>
        );
    }

