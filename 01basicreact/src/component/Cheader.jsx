import React from "react";
class Cheader extends React.Component {
  render() {
    return (
      <h1>
        Its mi Class Component --- {this.props.name}-{this.props.player}
      </h1>
    );
  }
}
export default Cheader;
