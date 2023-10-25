import React from "react";
import axios from "axios";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        this.setState({
          users: response.data.users,
        });
        console.log(response);
      })

      .catch((error) => {
        this.setState({ error: "URL Error" });
        console.log(error);
      });
  }

  render() {
    const { users, error } = this.state;
    return (
      <div>
        <h1>
          List Users
          {users.length
            ? users.map(users => (
                <div key={users.id}>
                  {users.id} - {users.firstName}  {users.lastName}
                  <br />
                </div>
              ))
            : null}
          {error ? <div> {error}</div> : null}
        </h1>
      </div>
    );
  }
}
export default PostList;
