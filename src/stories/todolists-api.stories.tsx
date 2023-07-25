import React, {useEffect, useState} from 'react'
import axios from "axios"
import {todolistAPI} from "../components/reducers/TodolistAPI";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist("garden")
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "c80d652d-4b09-4c0f-b305-6dff29660240"
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {

                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "9a536033-0da8-4156-a55e-4ba67f57e9a4"
        todolistAPI.updateTodolist(todolistId, "larysa")
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "0a2781ef-ad81-480d-9d05-0beecc3c1c5a"
        todolistAPI.getTasks(todolistId)
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}














// import React, {useEffect, useState} from 'react'
// import {TodolistAPI} from "../components/reducers/TodolistAPI";
// import axios from "axios"
//
// export default {
//     title: 'API'
// }
//
//
// export const GetTodolists = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         TodolistAPI.getData()
//             .then((res) => setState(res.data))
//     }, [])
//     return <div>{JSON.stringify(state)}</div>
// }
//
// export const CreateTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         TodolistAPI.post()
//             .then((res) => setState(res.data))
//     }, [])
//     return <div>{JSON.stringify(state)}</div>
// }
// export const UpdateTodolistTitle = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         TodolistAPI.put()
//             .then((res) => setState(res.data))
//     }, [])
//
//     return <div>{JSON.stringify(state)}</div>
// }
// export const DeleteTodolist = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         TodolistAPI.delete()
//             .then((res) => setState(res.data))
//     }, [])
//     return <div>{JSON.stringify(state)}</div>
// }