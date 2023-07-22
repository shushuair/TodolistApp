import {combineReducers, createStore} from "redux";
import {todolistReducer} from "../reducers/todolistReducer";
import {tasksReducer} from "../reducers/tasksReducer";


export const AppRootReducer = combineReducers({
    todolists: todolistReducer,
    tasks: tasksReducer
})

export type AppRootReducerType = ReturnType<typeof AppRootReducer>
export const store = createStore(AppRootReducer)