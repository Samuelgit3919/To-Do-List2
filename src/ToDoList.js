import React, {useState} from 'react'

export default function ToDoList() {
  const [tasks , setTasks] = useState(["come", "take a shower", "walk the dog"]);
  const [newTasks , setNewTasks] = useState("");
  
  function handleInputChange(event){
    setNewTasks(event.target.value);
  }
  function addTask(){
    if(newTasks.trim() !== ''){
      setTasks(t => [...t, newTasks])
      setNewTasks('')
    }

  }
  function deleteTask(index){
    const updatedTasks= tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }
  
  function moveUp(index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index -1 ]] = 
      [updatedTasks[index - 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
    
  }
  function moveDown(index){
    if(index < tasks.length -1 ){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1 ]] = 
      [updatedTasks[index + 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }
  return (
    <div className='to-do-list'>
         <h1>To-Do-List</h1>
         <div>
            <input 
               type="text" 
               placeholder='enter a task'
               value={newTasks}
               onChange={handleInputChange}
               />
               <button 
               className='add-button'
               onClick={addTask} >Add</button>
         </div>
         <ol>
            {tasks.map((task, index) => 
              <li key={index}>
                <span className='text'>{task}</span>
                <button 
                  className='delete-button'
                  onClick={() => deleteTask(index)}>
                    delete
                </button>
                <button 
                  className='move-button'
                  onClick={() => moveUp(index)}>
                    moveUP
                </button>
                <button 
                  className='move-button'
                  onClick={() => moveDown(index)}>
                    moveDown
                </button>
              </li>
            )}
         </ol>
    </div>
  )
  }
