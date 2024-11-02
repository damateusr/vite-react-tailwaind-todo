import { useEffect, useRef, useState } from "react";
import MoonIcon from "./icons/MoonIcon"
import IconSun from "./icons/SunIcon";

const initialState =  localStorage.getItem("theme") === "dark";

const Header = ()=>{

  const [darkMode, setDarkMode] = useState(initialState);

  const ref = useRef(null) //cuando se utiliza con referencias dentro del ambito de react

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      //ref.current.classList.add('bg-gray-900')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      //ref.current.classList.remove('bg-gray-900')
    }
  },[darkMode])

  const handleClick = () =>{

  }

    return (
        <header className="container mx-auto px-4 md:max-w-xl" ref={ref}>
        <div className="flex justify-between">
          <h1 className="uppercase tracking-[0.3em] text-white text-4xl font-bold">Todo</h1>
          <button onClick={()=>{setDarkMode(!darkMode)}}>
             { darkMode ? <IconSun/> : <MoonIcon/> }
          </button>
        </div>
      </header>
    )
}

export default Header;