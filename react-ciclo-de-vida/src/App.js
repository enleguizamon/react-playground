import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catImage: null
    }
  }

  async componentDidMount() {
    const getCat = await fetch('https://api.thecatapi.com/v1/images/search');
    const getCatJson = await getCat.json();

    console.log(getCatJson)

    this.setState({
      catImage: getCatJson[0].url
    })
  }

  render () {
    return (
      <div >
        {/*ternario*/}
        {this.state.catImage ? (
          <img src={this.state.catImage} />
        ) : (
          <p>Cargando</p>
        )}

        {/*condicional simple*/}
        {!this.state.catImage && (
          <p>No hay ninguna imagen de gato</p>
        )} 
      </div>
    )
  }
}

export default App;
