import React from "react";
import Subjects from "./HOC";

class Sushant extends React.Component {
  state = {
    marks: 0,
  };
  marksIncremented = () => {
    this.setState({ marks: this.state.marks + 1 });
  };
  render() {
    return (
      <h1 onMouseOver={this.marksIncremented}>
        Sushant's Marks - {this.state.marks} in Subject {this.props.Sub2}
      </h1>
    );
  }
}
export default Subjects(Sushant);
