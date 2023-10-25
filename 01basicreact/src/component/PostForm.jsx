import React from "react";
import axios from "axios";

class PostForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      firstName: "",
      lastName: ""
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://dummyjson.com/users",  this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    //   console.log(`${this.state.firstName} ${this.state.lastName}`)

  };
  componentDidMount(){
    console.log(`Component Mounted`)
  }

  render() {
    const { id , firstName, lastName } = this.state;
    return (
      <div>
          <h2>Add new data</h2>
    <label>POST REQUEST</label>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">id</label>
            <input
              type="text"
              value={id}
              name="id"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>firstName -</label>
            <input
              type="text"
              value={firstName}
              name="firstName"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>lastName -</label>
            <input type="text" value={lastName} name="lastName" onChange={this.changeHandler} />
          </div>
          <button>Add new User</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
