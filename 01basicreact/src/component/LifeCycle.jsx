import React from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
          name: "ajay",
        };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("this mi getDerivedfrom props methodd");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("this is from render method");
    return (
      <div>
        <h1>LifeCycle</h1>
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}
export default LifeCycle;
