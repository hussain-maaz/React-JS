import React from "react";
// import { myContext } from "./A";
import { Consumer } from "./context";

class C extends React.Component {
  render() {
    return (
      <div>
        <h1>Component-C</h1>
        <Consumer>{(data) => <h3>{data.roll}</h3>}</Consumer>
      </div>
    );
  }
}
export default C;
