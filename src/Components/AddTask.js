import classes from "./AddTask.module.css"
import { useState } from "react"

const AddTask = (props) => {
    const[text,setDiscription]=useState('');
     const[day,setDate]=useState('');
    
      const[reminder,setReminder]=useState(false);
      const onSubmit=(e)=>{
        e.preventDefault();
        if(!text){
            alert("PLZ ADD TASK");
            return;
        }
        props.onAdd({text,day,reminder});
        setDiscription('');
        setDate('');
        setReminder(false);
      }
    
  return (
    <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.control}>
            <label>Task</label>
            
            <input type="text"
             placeholder="AddTask"
             value={text}
             onChange={(e)=>setDiscription(e.target.value)}
             />
        </div>

         <div className={classes.control}>
            <label>Day And Time</label>
            
            <input type="text"
             placeholder="AddTask"
              value={day}
             onChange={(e)=>setDate(e.target.value)}
            
              />
        </div>

         <div className={classes.control1}>
            <label>Reminder</label>
            
            <input type="checkbox" 
            checked={reminder}
                 value={reminder}
             onChange={(e)=>setReminder(e.currentTarget.checked)}
            
            />
        </div>

        <input className={classes.btn} type="submit" value='Save Task' />

    </form>
  )
}

export default AddTask