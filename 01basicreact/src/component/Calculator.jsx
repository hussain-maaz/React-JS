import React, { useState } from "react";

function Calculator() {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "  ",
  });

  function handleNumber(value) {
    // alert("handleNumber clicked " + value);
    let newValue = value;
    console.log("newValue " + newValue);
    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    console.log("Display " + calc.current);
    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOp: calc.preOp,
    });
  }

  function handleOperater(value) {
    const total = doCalculation();
    console.log(total);
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: value,
    });
  }
  console.log("calc.total " + calc.total);

  function doCalculation() {
    let total = parseInt(calc.total);
    console.log(total);
    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
    }
    return total;
  }
  // function renderDisplay() {
  //   return calc.current;
  // }

  // function handleEqual() {
  //   let total = doCalculation();
  //   setCalc({
  //     current: "0",
  //     total: "0",
  //     isIntial: true,
  //   });
  // }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "  ",
    });
  }
  return (
    <div className="calculator">
      <div className="display">{calc.current}</div>
      <CalcButton value="7" onClick={handleNumber}></CalcButton>
      <CalcButton value="8" onClick={handleNumber}></CalcButton>
      <CalcButton value="9" onClick={handleNumber}></CalcButton>
      <CalcButton
        value="/"
        className="operator"
        onClick={handleOperater}
      ></CalcButton>

      <CalcButton value="4" onClick={handleNumber}></CalcButton>
      <CalcButton value="5" onClick={handleNumber}></CalcButton>
      <CalcButton value="6" onClick={handleNumber}></CalcButton>
      <CalcButton
        value="*"
        className="operator"
        onClick={handleOperater}
      ></CalcButton>

      <CalcButton value="1" onClick={handleNumber}></CalcButton>
      <CalcButton value="2" onClick={handleNumber}></CalcButton>
      <CalcButton value="3" onClick={handleNumber}></CalcButton>
      <CalcButton
        value="-"
        className="operator"
        onClick={handleOperater}
      ></CalcButton>

      <CalcButton
        value="C"
        className="operator"
        onClick={handleClear}
      ></CalcButton>
      <CalcButton value="0" onClick={handleNumber}></CalcButton>
      <CalcButton value="=" onClick={handleOperater}></CalcButton>
      <CalcButton
        value="+"
        className="operator"
        onClick={handleOperater}
      ></CalcButton>
    </div>
  );
}
function CalcButton(props) {
  return (
    <button
      className={props.className}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </button>
  );
}
// export default CalcButton;
export default Calculator;
