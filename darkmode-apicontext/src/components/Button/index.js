import "./style.css";
import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";

function Button(props) {
  const theme = useContext(ThemeContext);

  return(
    <button onClick={() => props.handleTheme()} className={`${theme} button`}>Cambiar theme</button>
  )
}

export default Button;