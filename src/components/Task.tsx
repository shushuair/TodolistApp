import React from 'react';
import {Checkbox} from "./Checkbox";
import {Button} from "./Button";
import {useDispatch} from "react-redux";
import {removeTaskAC} from "./reducers/tasksReducer";
import EditableSpan from "./EditableSpan";

export type TaskPropsType = {
    todolistID: string
    taskID: string
    taskTitle: string
    statusChecked: boolean
}


const Task = (props: TaskPropsType) => {
    const {todolistID, taskID, taskTitle, statusChecked} = props
    const dispatch = useDispatch()
    const removeTask = () => {
        dispatch(removeTaskAC(todolistID,taskID))
    }

    return (
        <div>
            <EditableSpan value={taskTitle} onChange={()=>{}} />
            <Checkbox callback={()=>{}} statusChecked={statusChecked}/>
            <Button name={"X"} callback={removeTask}/>
        </div>
    );
};

export default Task;