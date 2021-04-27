import "./style.css";
import Search from "../Search";
import { Link } from "react-router-dom";

function Nav() {
return(
  <div className="nav">
    <Search />
    <Link to="/add" className="link">
    <button className="agregar">Agregar Startup</button>
    </Link>
  </div>
);
}

export default Nav;