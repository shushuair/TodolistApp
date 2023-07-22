import React from 'react';
import {FilterStatusType, TodolistsType} from "./reducers/todolistReducer";
import {useSelector} from "react-redux";
import {AppRootReducerType} from "./redux/store";
import {TasksType, TaskType} from "./reducers/tasksReducer";

export type TasksPropsType = {
    todolistID: string
    filterStatus: FilterStatusType
}



export const Tasks = (props: TasksPropsType) => {
    const {todolistID, filterStatus} = props
    const tasks = useSelector<AppRootReducerType, TaskType[]>(state => state.tasks[todolistID])
    let filteredTasks = tasks
    if(filterStatus === "active"){
        filteredTasks = tasks.filter(el=>!el.isDone)
    }
    if(filterStatus === "completed"){
        filteredTasks = tasks.filter(el=>el.isDone)
    }
    return (
        <div>
            <Task />
        </div>
    );
};
