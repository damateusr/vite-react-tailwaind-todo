import { useState } from "react";

const ToDo = ({createToDo}) =>{

    const [tittle, setTittle] = useState('')

    const handleSubmit = (e)=>{

        e.preventDefault();
        if(!tittle.trim().length >0){
            return setTittle("")
        }
        createToDo(tittle);
        setTittle("")

    }

    return (
        <form onSubmit={handleSubmit} className="dark:bg-gray-800 flex rounded bg-white overflow-hidden py-4 gap-4 items-center px-4 mt-8">
            <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
            <input className="w-full text-gray-400 outline-none dark:bg-gray-800"
            type="text" placeholder="Create a new todo..." value={tittle} onChange={(e)=>{ setTittle(e.target.value) }}/>
        </form>
    )
}

export default ToDo;