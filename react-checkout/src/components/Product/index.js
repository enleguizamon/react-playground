import React from 'react';
import './style.scss';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    }, 
      () => { this.props.handleCallback(this.props.id, this.props.price * this.state.count) }); //en el parámetro tengo que pasar id como props y total del producto (precio por cantidad)
    };

  decrement = () => {
    if (this.state.count < 2) {
      this.setState({
        count: 1
      });
    } else {
      this.setState({
        count: this.state.count - 1
      }, 
        () => { this.props.handleCallback(this.props.id, this.props.price * this.state.count)}); //esto se ejecuta inmediatamente depués del setState (se pone , y una función anónima porque el setState puede ser asíncrono.
      }
  };

  render() {
    const { id, img, name, price, oldPrice } = this.props;
    return (
      <div className="productWrapper">
        <div className="imgWrapper">
          <img className="img" src={img} />
        </div>
        <div className="dataWrapper">
          <h3>{name}</h3>
          <div className="priceWrapper">
            <h4 className="price">$ {price}</h4>
            <span className="oldPrice">{oldPrice}</span>
          </div>
          <div className="counterWrapper">
            <button className="less" onClick={this.decrement}>-</button>
            <div className="counter">{this.state.count}</div>
            <button className="plus" onClick={this.increment}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;