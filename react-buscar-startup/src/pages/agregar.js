import React from "react";
import Navbar from "../components/Navbar";
import './agregar.scss'

class Agregar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      logo: "",
      email: "",
      desc: "",
      web: "",
      tw: "",
      ig: "",
      estaOk: "",
      showMessage: false,
      rememberStartup: false,
    };
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  /*handleClick() {
    const { name, email, logo, desc } = this.state;
    const isValid = name && email && logo && desc ? true : false;

    if(isValid) {
      //Acá agrego al localstorage
      const oldStartsups = localStorage.getItem('startups') //paso 1

      if(oldStartsups) {
        const parseOldStartups = JSON.parse(oldStartsups)
        parseOldStartups.push({
          name,
          logo,
          desc
        }) //paso 2
        const newStartups = JSON.stringify(parseOldStartups)
        localStorage.setItem('startups', newStartups) //paso 3
      }
    } else {
      const startups = []
      startups.push({
        name,
        logo,
        desc
      });
      const startupsToString = JSON.stringify(startups);
        localStorage.setItem('startups', startupsToString);
    }*/
    handleClick() {
      const { name, email, logo, desc } = this.state;
      const isValid = name && email && logo && desc ? true : false;
  
      if (isValid) {
        //ACA AGREGO AL LOCALSTORAGE
        const oldStartups = localStorage.getItem("startups"); // este es el paso 1
  
        if (oldStartups) {
          const parsedOldStartups = JSON.parse(oldStartups);
          parsedOldStartups.push({
            name,
            email,
            logo,
            desc
          }); // Esto es el paso 2
  
          const newStartups = JSON.stringify(parsedOldStartups);
          localStorage.setItem("startups", newStartups); // Este es el paso 3
        } else {
          const startups = [];
          startups.push({
            name,
            email,
            logo,
            desc
          });
  
          const startupsToString = JSON.stringify(startups);
          localStorage.setItem("startups", startupsToString);
        }
      }
  

    this.setState({
      estaOk: isValid,
      showMessage: true
    });
    //localStorage.setItem([name],JSON.stringify(this.state)); Esta es la forma que probamos en grupo
  }


  render() {
    const { estaOk, showMessage } = this.state;
    return (
      <>
        <Navbar />

        <div className="wrapper-agregar">
          {showMessage && (estaOk ?
            <p className="bien">Startup creada correctamente. En breve será aprobada</p> : <p className="mal">Por favor completa todos los datos requeridos</p>
          )}
          <p className="title-agregar">Nombre</p>
          <input
            className="input-agregar"
            name="name"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Nombre"
          />
          <p className="title-agregar">Logo</p>
          <input
            className="input-agregar"
            name="logo"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Link a Imagen"
          />
          <p className="title-agregar">Mail</p>
          <input
            className="input-agregar"
            name="email"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Mail"
          />
          <p className="title-agregar">Descripcion</p>
          <textarea
            className="input-agregar"
            name="desc"
            onChange={(e) => this.handleChange(e)}
          ></textarea>
          <p className="title-agregar">Web</p>
          <input
            className="input-agregar"
            name="web"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Web (opcional)"
          />
          <p className="title-agregar">Twitter</p>
          <input
            className="input-agregar"
            name="tw"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Twitter (opcional)"
          />
          <p className="title-agregar">Instagram</p>
          <input
            className="input-agregar"
            name="ig"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Instagram (opcional)"
          />
          <button className="boton-agregar" onClick={() => this.handleClick()}>
            Enviar
          </button>
        </div>
      </>
    );
  }
}

export default Agregar;