import classes from "./Header.module.css"
import Button from "./Button";
const Header = (props) => {
    
  return (
    <header className={classes.header}>
        <h1>{props.title}</h1>
        
        <Button color={props.ShowAddTask ? "REd" : "green"}
         typ={props.ShowAddTask ? "Close" : "Add"}
          onClick={props.onAdd}/>
    </header>
  )
}


export default Header;