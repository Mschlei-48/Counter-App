import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const Increment=()=>{
    setCount(count+1);
  }
  
  const Decrement=()=>{
    if(count>0){
      setCount(count-1);
    }
    else{
      setCount(count);
    }
    
  }

  return (
    <>
       <h1>CounterApp</h1>
       <h5>{count}</h5>
       <button onClick={Increment}>Add</button>
       <button onClick={Decrement}>Minus</button>
    </>
  )
}

export default App
