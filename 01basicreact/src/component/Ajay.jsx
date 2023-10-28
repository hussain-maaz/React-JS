import React from "react";
import Subjects from "./HOC";

class Ajay extends React.Component {
  state = {
    marks: 0,
  };
  marksIncremented = () => {
    this.setState({ marks: this.state.marks + 1 });
  };
  render() {
    return (
      <h1 onMouseOver={this.marksIncremented}>
        Ajay's Marks - {this.state.marks} in Subject {this.props.hocSub}
      </h1>
    );
  }
}
export default Subjects(Ajay);
