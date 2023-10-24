import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/About">about</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/"></Route>
        <Home></Home>
        <Route path="/users">
          <Users></Users>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}
function Users() {
  return <h2>Users</h2>;
}

export default Routing;
