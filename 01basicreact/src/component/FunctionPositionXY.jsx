import React, { useState, useEffect } from "react";

function FunctionPositionXY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const positionXY = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("changes made in DOM so useEffect invoked");
    window.addEventListener("mousemove", positionXY);
  },[x,y]);
  return (
    <div>
      <h2>
        X - {x} Y - {y}
      </h2>
    </div>
  );
}
export default FunctionPositionXY;
