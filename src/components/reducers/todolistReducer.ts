import {v1} from "uuid";


export type FilterStatusType = "all" | "active" | "completed"

export type TodolistsType = {
    id: string
    title: string
    filter: FilterStatusType
}
export const todolistId1 = v1()
export const todolistId2 = v1()

let initialState: TodolistsType[] = [
    {id: todolistId1, title: 'What to learn ', filter: 'all'},
    {id: todolistId2, title: 'What to buy ', filter: 'all'}
]
// let initialState: TodolistDomainType[] = []

export type SetTodolistsActionType = {
    type: "SET-TODOLISTS"
    todolists: TodolistsType[]
}

type MainType = ChangeTitleTodolistACType | RemoveTodolistACType |
    AddTodolistACType | ChangeFilterACType | SetTodolistsActionType

export const todolistReducer = (state: TodolistsType[] = initialState, action: MainType): TodolistsType[] => {
    switch (action.type) {
        case "CHANGE-TITLE-TODOLIST": {
            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        }
        case "REMOVE-TODOLIST": {
            return state.filter(el => el.id !== action.payload.id)
        }
        case "ADD-TODOLIST": {
            return [...state, {id: action.payload.todolistId, title: action.payload.title, filter: "all"}]
        }
        case "CHANGE-FILTER": {
            return state.map(el => el.id === action.payload.todolistID ? {
                ...el,
                filter: action.payload.newStatusFilter
            } : el)
        }
        case "SET-TODOLISTS": {
            return action.todolists
        }
        default:
            return state
    }
}

export type ChangeTitleTodolistACType = ReturnType<typeof changeTitleTodolistAC>
export const changeTitleTodolistAC = (todolistId: string, title: string) => {
    return {
        type: "CHANGE-TITLE-TODOLIST",
        payload: {title: title, id: todolistId}
    } as const
}

export type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {id: todolistId}
    } as const
}

export type AddTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: "ADD-TODOLIST",
        payload: {title, todolistId: v1()}
    } as const
}

export type ChangeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (todolistID: string, newStatusFilter: FilterStatusType) => {
    return {
        type: "CHANGE-FILTER",
        payload: {todolistID, newStatusFilter}
    } as const
}


export const setTodolistsAC = (todolists: TodolistsType[]):SetTodolistsActionType => {
    return {
        type: "SET-TODOLISTS",
        todolists: todolists
    } as const
}

