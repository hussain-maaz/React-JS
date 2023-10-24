import React from "react";
import Testing from "./Testing";
class Cheader extends React.Component {
  state = {
    users: [
      { id: 5, name: "maxi", job: "allrounder" },
      { id: 8, name: "lala", job: "Hitter" },
    ],
  };
  render() {
    // const newUsers = this.state.users.map((user) => {
    //   return (
    //     <h1 key={user.id}>{user.id + " " + user.name + " " + user.job}</h1>
    //   );
    // });
    // console.log(this.state.users);
    return (
      <div>
        <h1>
          Its mi Class Component --- {this.props.name}-{this.props.player}
        </h1>
        {this.state.users.map((user) => {
          return (
            // <h1 key={user.id}>{user.id + " " + user.name + " " + user.job}</h1>
            <Testing value={user.id}></Testing>
          );
        })}
        {/* <h1>{newUsers}</h1> */}
      </div>
    );
  }
}
export default Cheader;
