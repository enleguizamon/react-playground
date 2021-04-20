import { useEffect, useState } from "react";
import "./App.css";
import CatImg from "./components/CatImg";

function App() {
  const [login, setLogin] = useState("");
  const [cat, setCat] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.github.com/users/enleguizamon");
      const dataJson = await data.json();

      setLogin(dataJson.login);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchCat() {
      const cat = await fetch("https://api.thecatapi.com/v1/images/search");
      const catJson = await cat.json();

      //en el console.log puedo ver que devuelve un array de objetos, por eso el [0]
      setCat(catJson[0].url);
    }
    fetchCat();
  }, [])

  return (
    <>
    <p>Prueba a la api de Github</p>
      <p>Usuario github: {login}</p>
      <CatImg cat={cat} />
    </>
  );
}

export default App;
