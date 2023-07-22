import React from 'react';
import {useSelector} from "react-redux";
import {AppRootReducerType} from "./redux/store";
import {FilterStatusType, todolistId1, TodolistsType} from "./reducers/todolistReducer";
import {Button} from "./Button";
import {AddItemForm} from "./AddItemForm";

export type TodoPropsType = {
    todolistID: string
    titleTodolist: string
    filterStatus: FilterStatusType
}

export const Todo = (props: TodoPropsType) => {
    const {todolistID, titleTodolist, filterStatus} = props
    return (
        <div>
            <h2>{titleTodolist}</h2>
            <Button name={"X"} callback={()=>{}}/>
            <AddItemForm callback={()=>{}} />
            <Tasks />
            <Button name={"all"} callback={()=>{}}/>
            <Button name={"active"} callback={()=>{}}/>
            <Button name={"completed"} callback={()=>{}}/>
        </div>
    );
};

