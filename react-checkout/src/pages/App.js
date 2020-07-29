import React from 'react';
import './App.scss';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import products from '../data/products.json'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.settings = {
      infinite: true,
      speed: 500,
      arrows: true,
      adaptiveHeight: true,
      variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 1,
    }

    this.state = {
      data: products
    }
  }

  render() {
    const { img, name, price } = this.state;
    return (
      <div className="appWrapper">
        <h1 className="appTitle">Products</h1>
        <Slider {...this.settings} className="slick">

          {this.state.data.map((item, key) => {
            return (
              <Link to="/checkout">
                <div className="imgWrapper">
                  <img className="img" src={item.img} />
                  <p className="productName">{item.name}</p>
                  <p className="productPrice">$ {item.price}</p>
                </div>
              </Link>
            )
          })}

        </Slider>
      </div>
    );
  }
}

export default App;
