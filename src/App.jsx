import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className = "heading">
          <h1>To-Do List</h1>
        </div>
        <div className= "form">
          <input type="text"/>
          <button>
            <span>Add</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
