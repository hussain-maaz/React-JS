import React from "react";
function Inline() {
  const styling = {
    color: "Magenta",
    fontSize: "131px",
  };
  return (
    <div>
      <h1 style={styling}>Hello from Inline style</h1>
      <h1 className="failure">Failure</h1> 
    </div>
  );
}
export default Inline;
