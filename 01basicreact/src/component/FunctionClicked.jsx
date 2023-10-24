import React from "react";

// const newNumbers = numbers.map(function (number) {
//   return <li>{number}</li>;
// });
// console.log(newNumbers);

const newFun = function FunctionClicked(props) {
  const numbers = props.numbers;
  function ChangeEvent() {
    console.log("button Clicked");
  }

  return (
    <>
      <button onClick={ChangeEvent}>ClickEvent </button>
      <h2>
        {numbers.map((number) => (
          <li key={props.numbers}>{number}</li>
        ))}
      </h2>
      {/* <ul>{newNumbers}</ul> */}
      {/* <ul>
        {numbers.map((number) => (
          <li>{number}</li>
        ))}
      </ul> */}
      {/* <a href="https//:www.google.com" target="_blank" onClick={ChangeEvent}>
        Visit Google
      </a> */}
    </>
  );
};

// ClickedEvent();

export default newFun;
