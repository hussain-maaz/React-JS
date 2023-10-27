import React from "react";
// import C from "./C";
// import { myContext } from "./A";
import { Consumer } from "./Context";

class B extends React.Component {
  render() {
    return (
      <div>
        <div>
          {" "}
          <h1>Component-B</h1>
          <h2>{this.props.title}</h2>
          {/* <h3>{this.props.name}</h3> */}
        </div>

        <Consumer>
          {({ data, handleCheck }) => (
            <div>
              <h3>
                {data.name}-{data.roll}
              </h3>
              <button onClick={handleCheck}>change</button>
            </div>
          )}
        </Consumer> 

        <Consumer>
          {({ data, handleCheck }) => (
            <div>
              <h3>
                {data.name}-{data.roll}
              </h3>
              <button onClick={handleCheck}>change</button>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}
export default B;
