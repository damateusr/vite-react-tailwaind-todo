import React from "react";
import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const ToDoItem = React.forwardRef(({todo, removeToDo, updateToDo, ...props}, ref) =>{

    const{id, tittle, completed} = todo;

    return (
        <article {...props} ref={ref} className="flex gap-4 py-4 border-b border-b-gray-400 dark:bg-gray-800 dark:text-gray-600">
            <button onClick={()=>{updateToDo(id)}} className={`h-5 w-5 rounded-full border-2  ${completed ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center" : "flex-none inline-block"}`}>
                { completed && <CheckIcon/> }
            </button>
            <p className={`grow text-gray-600 gr dark:text-gray-600 ${ completed && "line-through" }`}>{tittle}</p>
            <button className="flex-none" onClick={()=>{removeToDo(id)}}><CrossIcon/></button>
        </article>
    )
})

export default ToDoItem;