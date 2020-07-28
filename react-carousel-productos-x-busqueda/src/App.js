import React from 'react';
import Carousel from './Components/Carousel'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      inputValue: ""
    }
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
        inputValue: e.target.value
    })
}

async handleClick() {
      const serchValue = this.state.inputValue
      const getCarouselData = await fetch `https://api.mercadolibre.com/sites/MLA/search?q=${serchValue}&limit=5`;
      const getCarouselDataJson = await getCarouselData.json();
  
      console.log(getCarouselDataJson);

      this.setState({
        products: getCarouselDataJson.results
      })
}

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.handleChange(e)} />
        <button onClick={() => this.handleClick}>Buscar</button>
        <Carousel title={this.state.inputValue} products={this.state.products} />
      </div>
    )
  }
}

export default App;
