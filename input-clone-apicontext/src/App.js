import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { AlgoProvider } from "./contexts/AlgoContext";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  function handleCallback(newInput) {
    setValue(newInput)
  }

  const completeContextData = {
    value,
    handleCallback,
  };

  return (
    <AlgoProvider value={completeContextData}>
      <>
        <Nav />
        <Content />
      </>
    </AlgoProvider>
  );
}

export default App;
