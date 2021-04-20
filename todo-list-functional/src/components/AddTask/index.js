import { useState } from "react";

function AddTask(props) {
  const [inputValue, setInputValue] = useState("");
   
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {    
    addTask()
  }

  function handleKeyPress(e) {
    if (e.keyCode == 13) {
      addTask()
    }
  }

  function addTask() {
    if (inputValue != "") {
      props.handleCallback(inputValue);
      setInputValue("")
    }
  }

 return(
   <>
   <input onChange={handleChange} value={inputValue} onKeyDown={handleKeyPress} />
   <button onClick={handleClick}>Agregar</button>
   </> 
 ) 
}

export default AddTask;