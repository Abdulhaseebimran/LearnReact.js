import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 px-0 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-2xl'>
          <button className='outline-none px-4 rounded-full py-2 text-white font-bold text-sm'
          onClick={() => setColor("red")} 
          style={{backgroundColor: "red"}}>Red</button>
          <button className='outline-none px-4 rounded-full py-2 text-white font-bold text-sm' 
          onClick={() => setColor("blue")} 
          style={{backgroundColor: "Blue"}}>Blue</button>
          <button className='outline-none px-4 rounded-full py-2 text-white font-bold text-sm'
          onClick={() => setColor("green")}  
          style={{backgroundColor: "green"}}>Green</button>
          <button className='outline-none px-4 rounded-full py-2 text-white font-bold text-sm'
          onClick={() => setColor("pink")}  
          style={{backgroundColor: "pink"}}>Pink</button>
          <button className='outline-none px-4 rounded-full py-2 text-black font-bold text-sm'
          onClick={() => setColor("yellow")}  
          style={{backgroundColor: "yellow"}}>Yellow</button>
          <button className='outline-none px-4 rounded-full py-2 text-white font-bold text-sm'
          onClick={() => setColor("orange")}  
          style={{backgroundColor: "orange"}}>orange</button>
          <button className='outline-none px-4 rounded-full py-2 text-white font-bold text-sm'
          onClick={() => setColor("purple")}  
          style={{backgroundColor: "purple"}}>Purple</button>
          <button className='outline-none px-4 rounded-full py-2 text-white font-bold text-sm'
          onClick={() => setColor("grey")}  
          style={{backgroundColor: "grey"}}>Grey</button>
          <button className='outline-none px-4 rounded-full py-2 text-black font-bold text-sm'
          onClick={() => setColor("white")}  
          style={{backgroundColor: "white"}}>White</button>
          <button className='outline-none px-4 rounded-full py-2 text-white font-bold text-sm'
          onClick={() => setColor("black")}  
          style={{backgroundColor: "black"}}>Black</button>
          <button className='outline-none px-4 rounded-full py-2 text-black font-bold text-sm'
          onClick={() => setColor("lavender")}  
          style={{backgroundColor: "lavender"}}>Lavender</button>
        </div>
      </div>
    </div>
  )
}

export default App
