import React, { useState } from 'react'
import './App.css'
import ListItem from './ListItem';

function App() {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState([])
  const [input, setInput] = useState("")
  function inputValue(event){
    const {value} = event.target;
    setInput(value)
  }
  function addItem(){
    setCount((count)=> count +1)
    setItem((prev)=>{
      return [...prev, {
        id : count,
        text : input
      }]
    })
    setInput("")
  }
  return (
    <>
      <div className='container'>
        <div className = "heading">
          <h1>To-Do List</h1>
        </div>
        <div className= "form">
          <input type="text" value={input} onChange={inputValue}/>
          <button onClick={addItem}>
            <span>Add</span>
          </button> 
        </div>
        <div>
          <ul>
          {item.map((item)=>{
            return(<ListItem 
              id = {item.id}
              text = {item.text}
            />)
          })}  
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
