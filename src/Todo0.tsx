
import { useState } from "react"
import Task from "./Task"

type taskdata = {
    id: number;
    name: string;
}
const Todo = () => {
    const [input, setin] = useState<string>('')
    const [task, settask] = useState<taskdata[]>([])
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.code === 'Enter') {
                 addTask(input); 
        }
    }


    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setin(ev.target.value)

    }

    const addTask = (taskName: string) => {
        if (input==="") 
        {alert("Task cannot be empty")}
        else{
            {alert(task.length)}
        const newid = (new Date()).getTime()
        let a = [{ id: newid, name: taskName}, ...task]
        settask(a)
        }
    }

    const cc = () => {
        addTask(input);
    }

    const deletetask = (idnum:number) => {
        const newtask = task.filter(x => x.id!==idnum)
        settask(newtask)
    }
    return (
        <div className='mx-auto max-w-4xl' id="t">
            {/* task input and add button */}
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl'
                    onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
                <button className='border border-gray-400 w-8 font-bold' onClick={cc}>+</button>
            </div>
            {task.map(x => <Task id={x.id} name={x.name} deleteF={deletetask}></Task>)}
        </div>
    )
}
export default Todo