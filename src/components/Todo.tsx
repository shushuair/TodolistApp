import React, {memo, useCallback, useReducer} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "./redux/store";
import {
    changeFilterAC, changeTitleTodolistAC,
    FilterStatusType,
    removeTodolistAC,
    todolistId1,
    TodolistsType
} from "./reducers/todolistReducer";
import {Button} from "./Button";
import {AddItemForm} from "./AddItemForm";
import {Tasks} from "./Tasks";
import {addTaskAC} from "./reducers/tasksReducer";
import EditableSpan from "./EditableSpan";

export type TodoPropsType = {
    todolistID: string
    titleTodolist: string
    filterStatus: FilterStatusType
}

export const  Todo =  memo((props: TodoPropsType) => {
    const dispatch = useDispatch()
    const {todolistID, titleTodolist, filterStatus} = props
    const addTask = (value: string) =>{
        dispatch(addTaskAC(todolistID,value))
    }
    const changeTodolistTitle = (title: string) => {
        dispatch(changeTitleTodolistAC(todolistID, title))
    }
    const removeTodolist = useCallback(() => {
        dispatch(removeTodolistAC(todolistID))
    },[dispatch,todolistID])
    const newStatusFilter = useCallback((newStatus: FilterStatusType) => {
        dispatch(changeFilterAC(todolistID,newStatus))
    }, [dispatch, todolistID])
    return (
        <div>

            <h2>
                <EditableSpan value={titleTodolist} onChange={changeTodolistTitle} />
                <Button name={"X"} callback={removeTodolist}/>
            </h2>
            <AddItemForm callback={addTask} />
            <Tasks
                todolistID={todolistID}
                filterStatus={filterStatus}
            />
            <Button name={"all"} callback={()=>newStatusFilter("all")}/>
            <Button name={"active"} callback={()=>newStatusFilter("active")}/>
            <Button name={"completed"} callback={()=>newStatusFilter("completed")}/>
        </div>
    );
})

