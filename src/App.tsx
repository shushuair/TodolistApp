import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {Todolist} from "./components/Todolist/Todolist";
import {addTodolistAC, todolistReducer} from "./components/reducers/todolistReducer";
import {useDispatch} from "react-redux";
import {combineReducers} from "redux";
import {tasksReducer} from "./components/reducers/tasksReducer";

function App() {
    const dispatch = useDispatch()

    function addTodolist(title: string) {
        dispatch(addTodolistAC(title))
    }

  return (
    <div className="App">
        <div>
            <h1>TODOLISTS</h1>
            <h3>Add todolist</h3>
            <AddItemForm callback={addTodolist}/>
            <Todolist
            />
        </div>


    </div>
  );
}

export default App;
