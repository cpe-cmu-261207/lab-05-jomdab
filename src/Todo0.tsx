
import { useState } from 'react'
import React from 'react'
import Task from './Task'

type TaskData = {
    name: string;
    id: Number;
}

const TodoList = () => {
    const [curtask, setcurtask] = useState<string>('')
    const [tasks, setTasks] = useState<TaskData[]>([])
    const [finish, setfinish] = useState<TaskData[]>([])
    const onChangecallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setcurtask(ev.target.value)
    }
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(ev.code)
        if(ev.code === 'Enter'){
            addTask(curtask)
        }   
    }
    function inputCheck(str:String) {
        return str!==''
    }

    const addTask = (taskname: string) => {
        if(inputCheck(taskname) === false){
            alert("Task cannot be empty")
        }
        else{
            const newid = (new Date()).getTime()
            const newTasks = [{ id: newid, name: taskname },...tasks]
            setTasks(newTasks)
        }
        
    }
    const deleteTask = (id: Number) => {
        const newTasks = tasks.filter(x => {return x.id!==id})
        setTasks(newTasks)
    }
    const finishTask = (id:Number) =>{
        const thisTask = tasks.filter(x=>x.id === id)
        const newfinish = [thisTask[0],...finish]
        setfinish(newfinish)
        const oldTask = tasks.filter(x=> x.id !== id)
        const newTasks = [...oldTask]
        setTasks(newTasks)
    }
    return (
        <div>
            <div className='mx-auto max-w-4xl'>
                <div className='flex space-x-1'>
                    <input className='border border-gray-400 w-full text-2xl'
                        onKeyDown={onKeyDownCallback} onChange={onChangecallback}></input>
                    <button className='border border-gray-400 w-8 font-bold' onClick ={()=>addTask(curtask)}>+</button>
                </div>
                {tasks.map(x=> <Task id={x.id} name={x.name} deleteF={deleteTask} doneF = {finishTask} finish = {true}></Task>)}
                {finish.map(x=><Task id={x.id} name={x.name} deleteF={deleteTask} doneF = {finishTask} finish = {false}></Task>)}
            </div>
        </div>

            )
}
export default TodoList