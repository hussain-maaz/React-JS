import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      address: "",
    };
  }
  handleUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.username} ${this.state.address}`);
    console.log(`${this.state.username} ${this.state.address}`);
  };
  render() {
    return (
      <>
        <h1>this a form page</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>username</label>
            <input
              type="text"
              //   value={this.state.username}
              onChange={this.handleUserName}
            />
          </div>
          <div>
            <label>Address</label>
            <textarea
              //   value={this.state.address}
              onChange={this.handleAddress}
            ></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </>
    );
  }
}
export default Form;
