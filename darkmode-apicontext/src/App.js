import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Button from "./components/Button";
import Content from "./components/Content";
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light")

  function handleTheme() {
    const newTheme = theme == "light" ? "dark" : "light";
    console.log(newTheme)
    setTheme(newTheme);
  }

  return (
    <ThemeProvider value={theme}>
    <div className="app">
    <Button handleTheme={handleTheme}/>
    <Content />
    </div>
    </ThemeProvider>
  );
}

export default App;
