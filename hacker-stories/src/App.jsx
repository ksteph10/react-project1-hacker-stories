import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [{
   id: 1,
   title: "complete assignment",
},
{
  id: 2,
  title: "wash the car",
},
{
  id: 3,
  title: "walk the dog",

}
 ];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> To-do list</h1>
        <ul>{todoList.map(item => (
        <li key={item.id}>{item.title}</li>))}</ul>
    </>
  )
}

export default App
