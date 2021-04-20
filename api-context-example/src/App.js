import './App.css';
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Component2 from "./components/Component2";

class App extends React.Component {
  render() {
    const mockProvider = {
      name: "Eli",
      surname: "Leguizamón"
    }

    return(
      <ThemeProvider value={mockProvider}>
        <p>primer componente</p>
        <Component2 />
      </ThemeProvider>
    )
  }
}

export default App;
