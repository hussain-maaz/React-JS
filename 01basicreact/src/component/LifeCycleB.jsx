import React from "react";

export class LifeCycleB extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor from LC-B");
    this.state = {
      name: "ajay",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("this mi getDerivedfrom props methodd from LC-B");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount LC-B");
  }
  render() {
    console.log("this is from render method LC-B");
    return (
      <div>
        <h1>LifeCycleB</h1>
     
      </div>
    );
  }
}
export default LifeCycleB;
