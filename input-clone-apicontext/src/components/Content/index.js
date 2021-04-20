import { useContext } from "react";
import AlgoContext from "../../contexts/AlgoContext";

function Content() {
  const {value} = useContext(AlgoContext);

  return(
    <>
    <p>{value}</p>
    </>
  )
}

export default Content;