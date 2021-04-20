import { useContext } from "react";
import AlgoContext from "../../contexts/AlgoContext";

function Complete() {
  const data = useContext(AlgoContext);
  const { handleCallback } = data;

  function handleInput(e) {
    handleCallback(e.target.value)
  }

  return(
    <input onChange={handleInput}/>
  )
}

export default Complete;