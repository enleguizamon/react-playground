import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Cards />
        <h5>Made With love By Eli</h5>
      </div>
    );
  }
}

export default App;
