import React from 'react';
import Product from '../Product';
import Total from '../Total';
import './style.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 0,
          img: "https://www.voguesbox.com/100-home_default/vintage-laptop-backpack-college-backpack-school-bag-fits-15-inch-laptop-grey-ce12odjthye.jpg",
          name: "Vintage Backpack",
          price: 54.99,
          oldPrice: "94.99",
          total: 54.99
        },
        {
          id: 1,
          img: "https://i.pinimg.com/originals/49/62/24/49622480cd2b22d3dec75efb9d183d9a.jpg",
          name: "Nike Shoes",
          price: 74.99,
          oldPrice: "$124.99",
          total: 74.99
        }
      ],
      totalCart: 129.98,
    }
  }

  handleCallback(idProduct, totalProduct) {
    console.log("viene del handlecallback", idProduct, totalProduct)
    //actualizar el total del producto que recibo
    this.setState({
      // hago el map, adentro un if que si coincide con la key id actualiza el state de total. (Actualizó cada product)
      products: this.state.products.map((product, key) => {
        if (product.id == idProduct) {
          product.total = totalProduct
        }
        return product;
     }),
     totalCart: Math.round((this.state.products.reduce((prev, next) => prev + next.total, 0)) * 100) / 100 //Usé .reduce para sumar los total de products y actualizar totalCart.
    })
  }
  
  render() {
    const { products } = this.state;
    return (
      <div className="cartWrapper">
        {products.map((product, key) => {
          return (
            <React.Fragment>
              <Product
                key={key}
                id={product.id} handleCallback={(idProduct, totalProduct) => this.handleCallback(idProduct, totalProduct)}
                img={product.img}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
              />
            </React.Fragment>
          )
        })}
        <Total totalCart={this.state.totalCart}/>
      </div>
    );
  }
}

export default Cart;