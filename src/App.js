import { useState } from 'react';
import classes from './App.module.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';

const App=()=>{
  const[showForm,SetShowForm]=useState(false);
   const [task,setTask]=useState(
       [
    {
    id:1,
    text:"Doctor Appointment",
    day:"4 Jul 2023 at 05:00 pm",
    reminder:"true"
},
  {
    id:2,
    text:"Meeting At School",
    day:"7 Aug 2023 at 11:00 am",
    reminder:"true"
},
  {
    id:3,
    text:"Food Shopping",
    day:"15 Sep 2023 at 12:00 pm",
    reminder:"false"
},
]

    )

    //delete 
    const deleteTask=(id)=>{
      setTask(task.filter((task)=>task.id !==id))
    }
    //toggle

    const toggleReminder=(id)=>{
      setTask(
        task.map((tasks)=>{return  tasks.id ===id ?{...tasks,
          reminder:!tasks.reminder}
          :tasks},
          
       ))
         
     
    }

  //ADD TASK

  const addTask=(tasks)=>{
   const id=Math.floor(Math.random()*10000+1);
   const newTask={id,...tasks};
   setTask([...task,newTask])

  }
 
  return(<>
  <div className={classes.container} >
   <Header title="TASK TRACKER"
    onAdd={()=>SetShowForm(!showForm)}
      ShowAddTask={showForm}
    />
   {showForm &&<AddTask onAdd={addTask}/>}
  {task.length>0 ? (
    <Tasks task={task}
     onDelete={deleteTask}
      onToggle={toggleReminder}
     />):"No Tasks To Show"
  }
   
  </div>
  
  


  </>)
}

export default App;
