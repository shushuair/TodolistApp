import React from 'react';
import './App.css';
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {Todolist} from "./components/Todolist/Todolist";
import {addTodolistAC} from "./components/reducers/todolistReducer";
import {useDispatch} from "react-redux";

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
