import React from 'react';
import {FilterStatusType} from "./reducers/todolistReducer";
import {useSelector} from "react-redux";
import {AppRootReducerType} from "./redux/store";
import {TaskType} from "./reducers/tasksReducer";
import Task from "./Task";

export type TasksPropsType = {
    todolistID: string
    filterStatus: FilterStatusType
}

export const Tasks = (props: TasksPropsType) => {

    let {todolistID, filterStatus} = props
    let tasks = useSelector<AppRootReducerType, TaskType[]>(state => state.tasks[todolistID])

    let filteredTasks = tasks
    if(filterStatus === "active"){
        filteredTasks = tasks.filter(el=>!el.isDone)
    }
    if(filterStatus === "completed"){
        filteredTasks = tasks.filter(el=>el.isDone)
    }
    return (
        <div>
            {filteredTasks.map(el=>{
                return (
                        <Task
                            key={el.id}
                            todolistID={todolistID}
                            taskID={el.id}
                            taskTitle={el.title}
                            statusChecked={el.isDone}
                        />
                    )
            })}
        </div>
    );
};
