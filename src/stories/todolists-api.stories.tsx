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
        const todolistId = "de2a0f31-f71b-4094-b7b1-8de64827f546"
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
        const todolistId = "de2a0f31-f71b-4094-b7b1-8de64827f546"
        todolistAPI.updateTodolist(todolistId, "larysa")
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")

    const getTasks = () => {
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <button onClick={getTasks}>get tasks</button>
        </div>
    </div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const deleteTask = () => {
        todolistAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={"todolistId"} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <button onClick={deleteTask}>delete task</button>
        </div>
    </div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const createTask = () => {
        todolistAPI.createTask(todolistId, taskTitle)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={"taskTitle"} value={taskTitle} onChange={(e) => {
                setTaskTitle(e.currentTarget.value)
            }}/>
            <button onClick={createTask}>create task</button>
        </div>
    </div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>("title 1")
    const [description, setDescription] = useState<string>("description 1")
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>("")
    const [deadline, setDeadline] = useState<string>("")

    const [todolistId, setTodolistId] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")

    const updateTask = () => {
        todolistAPI.updateTask(todolistId, taskId, {
            deadline: "",
            description: description,
            priority: priority,
            startDate: "",
            status: status,
            title: title
        })
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {setTodolistId(e.currentTarget.value)}}/>
            <input placeholder={"taskId"} value={taskId} onChange={(e) => {setTaskId(e.currentTarget.value)}}/>
            <input placeholder={"taskTitle"} value={title} onChange={(e) => {setTitle(e.currentTarget.value)}}/>
            <input placeholder={"description"} value={description} onChange={(e) => {setDescription(e.currentTarget.value)}}/>
            <input placeholder={"status"} value={status} onChange={(e) => {setStatus(+e.currentTarget.value)}}/>
            <input placeholder={"priority"} value={priority} onChange={(e) => {setPriority(+e.currentTarget.value)}}/>
            <button onClick={updateTask}>update task</button>
        </div>
    </div>
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