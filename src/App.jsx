import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"

const App = ()=>{
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="uppercase tracking-[0.3em] text-white text-4xl font-bold">Todo</h1>
          <button><MoonIcon/></button>
        </div>
        <form className="flex rounded bg-white overflow-hidden py-4 gap-4 items-center px-4 mt-8">
            <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
            <input className="w-full text-gray-400 outline-none"
            type="text" placeholder="Create a new todo..." />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 py-4 border-b border-b-gray-400">
            <button className="flex-none h-5 w-5 rounded-full border-2 inline-block"></button>
            <p className="grow text-gray-600 gr">Complete with Javascript curse in bluweb</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>

          <article className="flex gap-4 py-4 border-b border-b-gray-400">
            <button className="flex-none h-5 w-5 rounded-full border-2 inline-block"></button>
            <p className="grow text-gray-600 gr">Complete with Javascript curse in bluweb</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>

          <article className="flex gap-4 py-4 border-b border-b-gray-400">
            <button className="flex-none h-5 w-5 rounded-full border-2 inline-block"></button>
            <p className="grow text-gray-600 gr">Complete with Javascript curse in bluweb</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>
         
          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </div>

      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="flex gap-4 justify-center rounded-md p-4 bg-white">
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
    </div>
  )  
  
}

export default App