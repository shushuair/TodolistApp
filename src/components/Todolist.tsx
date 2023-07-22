import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "./redux/store";
import {
    addTodolistAC,
    changeTitleTodolistAC,
    FilterStatusType,
    removeTodolistAC,
    todolistId1,
    TodolistsType
} from "./reducers/todolistReducer";
import {Todo} from "./Todo";
import {AddItemForm} from "./AddItemForm";



export const Todolist = () => {
    const todolists = useSelector<AppRootReducerType, TodolistsType[]>(state => state.todolists)

    return (
        <div>
            {/*<AddItemForm callback={addTodolist}/>*/}
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

