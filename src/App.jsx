import React, { useState } from 'react'
import './App.css'
import ListItem from './ListItem';

function App() {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState([])
  const [deletedItem, addDelItem] = useState([])
  const [input, setInput] = useState("")
  function inputValue(event) {
    const { value } = event.target;
    setInput(value)
  }
  async function addItem() {
    setCount(count + 1)
    setItem((prev) => {
      return [...prev, {
        id: count,
        text: input
      }]
    })
    setInput("")
  }
  // Delete function 
  function delItem(index) {
    setItem((prev) => {
      const data = prev.filter((prev) => {
        if (prev.id === index) {
          
          addDelItem((p) => [...p, prev]);
        }
        return prev.id != index;
      })
      return data;
    })
  }

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function currTime() {
    let d = new Date().getHours().toString();
    d = d + ":"+ new Date().getMinutes();
    return d;
  }
  return (
    <>
      <div className='container'>
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div>
          <input type='checkbox'
            checked={checked}
            onChange={handleChange}
            id='deleted'
          />
          <label htmlFor="deleted">Deleted items</label>
        </div>
        <div className="form">
          <input type="text" value={input} onChange={inputValue} />
          <button className='button' onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>{!checked ? item.map((item) => {
            return (<ListItem
              id={item.id}
              key={item.id}
              text={item.text}
              del={delItem}
            />)
          }) : deletedItem.map((item) => {
            return (<ListItem
              key={item.id}
              id={item.id}
              text={item.text}
              del={null}
              time= {currTime()}
            />)
          })}
            { }
            { }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
