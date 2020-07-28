import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstNum: 0,
      secondNum: 0,
      result: 0,
    }
  }

  handleSum() {
    this.setState({
      result: parseInt(this.state.firstNum) + parseInt(this.state.secondNum)
    })

  }

  handleFirstNum() {
    this.setState({
      firstNum: e.target.value
    })
  }

  handleSecondNum() {
    this.setState({
      secondNum: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <input onChange={(e) => this.handleFirstNum(e)} type="text" />
        <input onChange={(e) => this.handleSecondNum(e)} type="text" />
        <button onClick={() => this.handleSum()}>Sumar</button>
        <p>Resultado: {this.state.result}</p>
      </React.Fragment>
    );
  }

}

export default App;
