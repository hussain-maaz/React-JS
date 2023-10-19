import React from "react";

class Channel extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "the Crazy of World-Cup is ON",
    };
  };
  Thanks(){
    this.setState({
        msg:"thanks for giving us sooo  much luvvvvvv"
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>;
        <button
          onClick={()=>{this.Thanks()}}
        >
          Thanks for watching
        </button>
      </div>
    );
  }
}
export default Channel;
