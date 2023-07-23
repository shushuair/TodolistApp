import React from 'react';
import {useSelector} from "react-redux";
import {AppRootReducerType} from "../redux/store";
import {TodolistsType} from "../reducers/todolistReducer";
import {Todo} from "../Todo/Todo";


export const Todolist = () => {
    const todolists = useSelector<AppRootReducerType, TodolistsType[]>(state => state.todolists)
    return (
        <div>
           {todolists.map(el=>{
                return (
                   <Todo
                        key={el.id}
                        todolistID={el.id}
                        titleTodolist={el.title}
                        filterStatus={el.filter}
                   />
                )
            })}
        </div>
    );
};

