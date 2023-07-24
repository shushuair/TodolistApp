import axios from "axios"

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "30526515-95f1-4d41-81b7-50437c774f84"
    }
}

export const todolistAPI = {
    getTodolists() {
        const promise = axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        return promise
    },
    createTodolist(title: string) {
        const promise = axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: title}, settings)
        return promise
    },
    deleteTodolist(id: string) {
        const promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
        return promise
    },
    updateTodolist(id: string, title: string) {
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title: title}, settings)
        return promise
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