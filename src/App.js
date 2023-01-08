import './App.css';

import { useState } from 'react';
import './App.css'

function App() {
 

  const [count,setCount]=useState(1)
  const [task,setTask]=useState("")
  const [items,setItems]=useState([])



 function SubmitFunction(e){
   e.preventDefault()
   
   
   
 }

 function OnClickFunc(){
              
  setItems(oldItems =>
    { let temp=task;
      if(temp==""){
        return oldItems
      }
      setTask("");
     
      let temp2=count
      setCount(count+1)
      return[...oldItems,{id:temp2,tsk:temp}]})
}

function deleteItem(id){
 
  setItems(oldItems=>oldItems.filter(item=>(item.id!==id)))
  return items
 
}

  
  return (
    <div className="App">
      <h1>Best Todo List Ever</h1>
      <form onSubmit={SubmitFunction}>
        <div>
        <input className="inForm my-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value={task} onChange={(e)=>{
          setTask(e.target.value)
        }}></input>
        <button className="inForm my-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={OnClickFunc}>Add</button>
        </div>
        
      </form>
      <ul>
        {items.map(item=>{
          return(
          <div className='items' key={item.id}>
          <li className="taskInList">{item.tsk} </li>
          <button className="taskInList buton-li bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"  onClick={()=>deleteItem(item.id)}>Remove</button>
          </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
