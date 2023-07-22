import React from 'react';
import {useSelector} from "react-redux";
import {AppRootReducerType} from "./redux/store";
import {todolistId1, TodolistsType} from "./reducers/todolistReducer";

export const Todolist = () => {
    const todolists = useSelector<AppRootReducerType, TodolistsType[]>(state => state.todolists)


    return (
        <div>
            {todolists.map(el=>{
                return (
                   <Todo />
                )
            })}
        </div>
    );
};

