import {useContext} from 'react';
import ThemeContext from "../../contexts/ThemeContext";

function Component3() {
  const data = useContext(ThemeContext);
    return(
      <>
      <p>Soy el componente 3</p>
      <p>El nombre del usuario es {data.name} y su apellido {data.surname}</p>
      </>
    )
}

export default Component3;