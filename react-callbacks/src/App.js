import React from 'react';
import './App.css';
import Autocomplete from './components/Autocomplete';

class  App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      AutocompleteValue: ''
    }
  }

  handleCallback(inputValue) {
    this.setState({
      autocompleteValue: inputValue
    })
  }

  render () {
    return (
      <React.Fragment>
       <nav>
         <Autocomplete handleCallback={(inputValue) => this.handleCallback(inputValue)} />
       </nav>
       <div>
         Tu autocomplete dice: {this.state.autocompleteValue}
       </div>
      </React.Fragment>
    );
  }

}

export default App;
