import React from 'react';
import './style.scss'

class Total extends React.Component {
  render() {
    return (
      <div className="totalWrapper">
        <hr className="line"></hr>
        <div className="shippingWrapper">
        <h4 className="shippingTitle">Shipping</h4>
        <span className="shippingPrice">$19</span>
        </div>
        <hr className="line"></hr>
        <div className="totalWrapper">
        <h4 className="totalTitle">Total</h4>
        <span className="totalPrice">{this.props.totalCart}</span>
        </div>
      </div>
    );
  }
}

export default Total;