import React from 'react';
import './App.scss';
import Slider from 'react-slick';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.settings= {
      infinite: true,
      speed: 500,
      arrows: true,
      adaptiveHeight: true,
      variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  }

  render () {
    return (
      <div className="appWrapper">
        <p>Soy app</p>
        <Slider {...this.settings} className="slick">
        <div className="imgWrapper">
          <img className="img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <div className="imgWrapper">
          <img className="img" src="https://images.unsplash.com/photo-1548094891-c4ba474efd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <div className="imgWrapper">
          <img className="img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <div className="imgWrapper">
          <img className="img" src="https://images.unsplash.com/photo-1548094891-c4ba474efd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
        </div>
        </Slider> 
      </div>
    );
  }
}

export default App;
