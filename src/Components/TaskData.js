import React from 'react'
import classes from "./TaskData.module.css"

const TaskData = (props) => {
  return (
   
    <div className={classes.container} 
   
     onDoubleClick={
        ()=>props.onToggle
        (props.task.id)
        }>
    <div  id={classes[`${props.task.reminder ? 'reminder' : ''}`]}>
        <h3>{props.task.text}</h3>
        <p>{props.task.day}</p></div>


      <div>
        <h2 onClick={()=>props.onDelete(props.task.id)
        }>X</h2>
      </div>
    </div>
  )
}

export default TaskData;