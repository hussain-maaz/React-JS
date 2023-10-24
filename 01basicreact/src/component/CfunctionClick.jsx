import React from "react";

class CfuntionClick extends React.Component {
  constructor() {
    super();
    // this.changeEvent=this.changeEvent.bind(this);
    this.state = {
      course: "MCA",
    };
  }
  changeEvent = () => {
    this.setState({
      course: "BCA",
    });
    console.log("event occured from class component", this.state.course);
  };

  render() {
    return (
      <div>
        <button onClick={this.changeEvent}>Class component button - </button>;
        <h1> {this.state.course}</h1>
      </div>
    );
  }
}
export default CfuntionClick;
