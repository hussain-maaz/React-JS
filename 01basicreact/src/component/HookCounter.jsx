import React, { useState } from "react";
function HookCounter() {
  const [titleName, setTitleName] = useState("state with Functional component");
  const [counter, setCounter] = useState(1)
  
  const changleHandle = ()=>{
    setTitleName("changing the state")
    console.log(titleName)
    setCounter(counter * 5)
  }
  return (
    <div>
      <button>Counter:{counter}</button>
      <h1>{titleName}</h1><br></br>
      <button onClick={changleHandle}>Change</button>
    </div>
  );
}

export default HookCounter;
