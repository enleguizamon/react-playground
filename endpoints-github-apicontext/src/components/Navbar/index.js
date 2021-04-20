import "./style.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Navbar() {
  const data = useContext(UserContext);

  return(
    <div className="navbar">
    {data.info.name}
    </div>
  )
}

export default Navbar;