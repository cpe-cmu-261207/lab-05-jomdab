import { useState } from "react"

type taskdata = {
    id: number
    name: string
    deleteF: Function
  }

const Task = ({id,name,deleteF} :taskdata) => {
    const [display,setdis] = useState<string>("none")
    const onm1 = () => {
        setdis("block")
    }
    const onm2 = () => {
        setdis("none")
    }
    return(
        <div
            className="flex justify-between h-8 items-center py-6 border-b"
            onMouseOver ={onm1} onMouseOut ={onm2}
          >
            <span className="text-2xl"> {name} </span>
            <div className="flex space-x-1 items-center">
            <button className="bg-green-400 w-24 text-2xl" onMouseOver ={onm1} style={{display: display}}>Done</button> 
            <button className="bg-red-400 w-24 text-2xl"  onMouseOver ={onm1}  style={{display: display}} onClick={deleteF(id)}>Delete</button> 
            </div>
          </div>
    )
}
export default Task