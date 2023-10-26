import React from "react";
class ClassPositionXY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  logMousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    console.log("component render & Mounted");
    window.addEventListener("mousemove", this.logMousePosition);
  }
  componentDidUpdate() {
    console.log("value updated");
    window.addEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    );
  }
}
export default ClassPositionXY;
