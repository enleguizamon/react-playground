import React from 'react';
import Contact from '../components/Contact'
import Cart from '../components/Cart'
import './checkout.scss';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.settings= {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  }

  render () {
    return (
      <div className="checkoutWrapper">
        <h1 className="title">Checkout</h1>
        <div className="wrapper">
        <Contact />
        <Cart />
        </div>   
      </div>
    );
  }
}

export default Checkout;
