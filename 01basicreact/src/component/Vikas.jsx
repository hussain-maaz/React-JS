import React from "react";
import Subjects from "./HOC";

class Vikas extends React.Component {
  state = {
    marks: 0,
  };
  marksIncremented = () => {
    this.setState({ marks: this.state.marks + 1 });
  };
  render() {
    return (
      <h1 onMouseOver={this.marksIncremented}>
        Vikas's Marks - {this.state.marks} in Subject {this.props.Sub3}
      </h1>
    );
  }
}
export default Subjects(Vikas);
