import {useState} from "react";
import {v1} from "uuid";
import {AddTodolistACType, FilterStatusType, RemoveTodolistACType, todolistId1, todolistId2} from "./todolistReducer";


export type TaskType = {id: string, title: string, isDone: boolean}

export type TasksType = {
    [key:string]: TaskType[]
}

let initialState:TasksType =  {
    [todolistId1]: [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true}
    ],
    [todolistId2]: [
        {id: v1(), title: 'Milk', isDone: true},
        {id: v1(), title: 'React Book', isDone: true}
    ]
}

export const tasksReducer = (state:TasksType = initialState, action: MainType): TasksType => {
    switch (action.type){
        case "REMOVE-TASK": {
            return {...state,
            [action.payload.todolistID]: state[action.payload.todolistID].filter(el=>el.id !== action.payload.taskID)}
        }
        case "ADD-TASK": {
            const newTask =  {id: v1(), title: action.payload.newTitle, isDone: false}
            return {...state,
            [action.payload.todolistID]: [newTask, ...state[action.payload.todolistID]]
            }
        }
        case "ADD-TODOLIST": {
           return {...state,
           [action.payload.todolistId]: []
        }}
        case "REMOVE-TODOLIST": {
            const copyState = {...state}
            delete copyState[action.payload.id]
            return copyState
        }


        default: return state
    }
}




export type MainType = RemoveTaskACType | AddTaskACType | AddTodolistACType | RemoveTodolistACType

export type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolistID:string, taskID:string) =>{
    return {
        type: "REMOVE-TASK",
        payload: {todolistID, taskID}
    } as const
}

export type AddTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistID:string, newTitle:string) => {
    return {
        type: "ADD-TASK",
        payload: {todolistID, newTitle}
    } as const
}





