import React from 'react';
import Carousel from './components/Carousel'

class App extends React.Component {
  render() {
    const items = [
      {
        img:"",
        title:"Primer producto",
        price:100
      },
      {
        img:"",
        title:"Segundo producto",
        price: 200
      },
      {
        img:"",
        title:"Tercer producto",
        price: 300
      },
      {
        img:"",
        title:"Cuarto producto",
        price: 400
      },
    ]

    const secondItems = []

    return(
      <div>
        <Carousel title="Carousel 1" items={items} />
        {/*<Carousel title="Carousel 2" secondItems={secondItems}/>*/}
      </div>
    )
  }
}

export default App;