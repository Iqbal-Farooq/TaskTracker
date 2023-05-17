import TaskData from "./TaskData";
const Tasks = (props) => {
   
  return (
    <div>
        {props.task.map((items)=>(
            <TaskData key={items.id}
             task={items} 
        onDelete={props.onDelete}
        onToggle={props.onToggle}
        />))}
    </div>
  )
}

export default Tasks;