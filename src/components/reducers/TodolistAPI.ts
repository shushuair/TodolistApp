import axios from "axios"
import {TasksType} from "./tasksReducer";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "30526515-95f1-4d41-81b7-50437c774f84"
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    ...settings
})

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type ResponseType<D> = {
    data: D
    messages: string[]
    resultCode: number
}

export type TaskType = {
    description: string
    title: string
    isDone: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

export const todolistAPI = {
    getTodolists() {
        const promise = instance.get<TodolistType[]>("todo-lists")
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType[] }>>("todo-lists", {title: title})
        return promise
    },
    deleteTodolist(id: string) {
        const promise = instance.delete<ResponseType<{}>>(`todo-lists/${id}`)
        return promise
    },
    updateTodolist(id: string, title: string) {
        const promise = instance.put<ResponseType<{}>>(`todo-lists/${id}`, {title: title})
        return promise
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks `)
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    }
}


// import axios from "axios";
//
// const instance = axios.create({
//     baseURL: 'https://social-network.samuraijs.com/api/1.1/',
//     withCredentials: true,
//     // header: {
//     //     'API-KEY': '31d3b244-d207-4062-b145-297089d8f2c1'
//     // }
// })
//
// export type TodolistType = {
//     id: string
//     title: string
//     addedDate: string
//     order: number
// }
// export type ResponseType<D> = {
//     resultCode: number
//     message: string[]
//     data: D
// }
//
// export const TodolistAPI = {
//     getData() {
//         return instance.get<TodolistType[]>('todo-lists')
//     },
//     post() {
//         return instance.post<ResponseType<{item: TodolistType}>>('todo-lists',
//             {title: "DDDDDDDDDDD"})
//     },
//     put() {
//         const todolistId = 'c5e5250f-83d4-4eb0-88f5-b2debd14c5d5'
//         return instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`,
//             {title: "EEEEEEEEE"},)
//     },
//     delete() {
//         const todolistId = 'c5e5250f-83d4-4eb0-88f5-b2debd14c5d5'
//         return instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`,)
//     }
// }