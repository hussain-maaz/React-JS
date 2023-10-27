import React from "react";
import B from "./B";
// import C from "./C";

import { Provider } from "./Context";
class A extends React.Component {
  state = {
    name: "Technical Stuff",
    roll: 20,
  };
  handleClickContext = () => {
    this.setState({ roll: this.state.roll + 1 });
    console.log(this.state.roll)
  };
  render() {
    const contextValue = {
      data: this.state,
      handleCheck: this.handleClickContext,
    };

    return (
      <div>
        <h1>Component-A</h1>
        <Provider value={contextValue}>
          <B title="Passing from component-A"></B>
        </Provider>
        {/* <C /> */}
      </div>
    );
  }
}
export default A;
// {this.props.name}
