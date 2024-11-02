import { DragDropContext} from "@hello-pangea/dnd"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import ToDo from "./components/ToDo"
import ToDoComputed from "./components/ToDoComputed"
import ToDoFilter from "./components/ToDoFilter"
import ToDoList from "./components/ToDoList"


const initialState = JSON.parse(localStorage.getItem('todos')) || [
  {id:1, tittle: "Go to the Gym", completed: true},
  {id:2, tittle: "10 Minutes to pray", completed: false},
  {id:3, tittle: "Pick up groceries", completed: false},
  {id:4, tittle: "Complete curse", completed: true},
  {id:5, tittle: "Complete todo app", completed: false}
];

const App = ()=>{

  const[toDos, setToDos] = useState(initialState)

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(toDos))
  },[toDos])

  const createToDo = (title) =>{
    const newToDo = {
      id: Date.now(),
      tittle: title.trim(),
      completed: false
    }

    setToDos([...toDos, newToDo]);
  }

  const removeToDo = (id) =>{
    setToDos(toDos.filter( todo => todo.id !== id))
  }

  const updateToDo = (id) =>{
    setToDos(toDos.map( todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
  }

  const computedItems = toDos.filter((todo) => !todo.completed).length;

  const clearCompleted = () =>{
    setToDos(toDos.filter( todo => !todo.completed))
  }

  const[filter, setFilter] = useState("all");

  const filterToDos = ()=>{
    switch (filter){
      case "all":
        return toDos;
      case "active":
        return toDos.filter( todo => !todo.completed)
      case "completed":
        return toDos.filter( todo => todo.completed)
      default :
        return toDos
    }
  }

  const changeFilter = (filter) => {setFilter(filter)}

  const handleDragEnd = (result)=>{
    if(!result.destination) return;
    
    const starIndex = result.source.index
    const endIndex = result.destination.index

    const copyArr = [...toDos]
    const [reorderArray] = copyArr.splice(starIndex,1)
    
    copyArr.splice(endIndex, 0, reorderArray)
    setToDos(copyArr)

  } 

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat 
    bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
    md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header/>
      
      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        
        <ToDo createToDo={createToDo}/>

        <DragDropContext onDragEnd={handleDragEnd}>
          <ToDoList todos={filterToDos()} removeToDo={removeToDo} updateToDo={updateToDo}/>
        </DragDropContext>

        <ToDoComputed computedItems={computedItems} clearCompleted={clearCompleted} />

        <ToDoFilter changeFilter={changeFilter} filter={filter}/>
      </main>

    </div>
  )  
  
}

export default App