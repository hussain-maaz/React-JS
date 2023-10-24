import React from "react";
import axios from "axios";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
        console.log(response);
      })

      .catch((error) => {
        this.setState({ error: "URL Error" });
        console.log(error);
      });
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div>
        <h1>
          List Posts
          {posts.length
            ? posts.map((posts) => (
                <div key={posts.id}>
                  {posts.id}-{posts.title}
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
