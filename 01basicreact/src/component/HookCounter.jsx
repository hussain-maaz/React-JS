import React, { useEffect, useState } from "react";
function HookCounter() {
  const [titleName, setTitleName] = useState("state with Functional component");
  const [counter, setCounter] = useState(1);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const changleHandle = () => {
    setTitleName("changing the state");
    console.log(titleName);
    setCounter(counter * 5);
  };
  const Increment = () => {
    setCount(count + 1);
    // uE()
  };
  const Decrement = () => {
    setCount1(count1 - 1);
    // uE();
  };

  //   const uE = function useEffect() {
  //     console.log("useEffect invoked");
  //   }

  useEffect(() => {
    console.log("useEffect invoked");
  },[count1,counter]);

  return (
    <div>
      <button>Counter:{counter}</button>
      {/* <button>Counter:{count}</button> */}
      <h1>{titleName}</h1>
      <br></br>
      <button onClick={changleHandle}>Change</button>
      <button onClick={Increment}>Increment{count}</button>
      <button onClick={Decrement}>Decrement{count1}</button>
    </div>
  );
}

export default HookCounter;
