import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(5);
  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    setcounter(counter + 1);
  };
  // console.log(counter + 1);

  const remValue = () => {
    counter = counter - 1;
    setcounter(counter - 1);
    // console.log(counter - 1);
  };
  return (
    <>
      <h1>React counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={remValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
