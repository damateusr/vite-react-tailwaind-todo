import {Droppable, Draggable } from "@hello-pangea/dnd"
import ToDoItem from "./ToDoItem"

const ToDoList = ({todos, removeToDo, updateToDo})=>{

    return (
        <Droppable droppableId="todos">
            {(droppableProv)=>(
                <div ref={droppableProv.innerRef} 
                    className="overflow-hidden bg-white rounded-t-md [&>article]:p-4 mt-8 dark:bg-gray-900"
                    {...droppableProv.droppableProps}>           
                    {
                        todos.map((todo, index) =>(
                            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                                {(draggableProv)=>(
                                    <ToDoItem todo={todo} 
                                    removeToDo={removeToDo} 
                                    updateToDo={updateToDo}
                                    ref={draggableProv.innerRef}
                                    {...draggableProv.dragHandleProps}
                                    {...draggableProv.draggableProps}/>
                                )}
                            </Draggable>
                        ))
                    }
                    {droppableProv.placeholder}
                </div>
                )
            }
        </Droppable>
    )
}

export default ToDoList