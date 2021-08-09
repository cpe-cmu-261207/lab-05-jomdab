import React,{useState} from 'react'
type Props = {
    id: Number;
    name: String;
    doneF: Function;
    deleteF: Function; //Function type
    finish: Boolean
}

const Task = ({ id, name, deleteF , doneF , finish }: Props) => {
    const [display,setdis] = useState<string>("none")
    return (
        <div>
            <div
            className="flex justify-between h-8 items-center py-6 border-b" onMouseOver={()=>setdis('block')} onMouseOut={()=>setdis('none')}
            >
                {finish?<span className="text-2xl"> {name} </span>:<span className="text-2xl"> <del>{name}</del> </span>}
                <div className="flex space-x-1 items-center">
                    {finish? <button className="bg-green-400 w-24 text-2xl" id="don" onClick ={()=>{doneF(id)}} onMouseOver={()=>setdis('block')} onMouseOut={()=>setdis('none')} style={{display:display}}>Done</button>:null}
                    {finish? <button className="bg-red-400 w-24 text-2xl" id="del" onClick={()=>{deleteF(id)}} style={{display: display}} onMouseOut={()=>setdis('none')} onMouseOver={()=>setdis('block')}>Delete</button>:null}
                </div>
            </div>
        </div>
    )
}

export default Task