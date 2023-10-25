import React, { useState } from "react";

function HookObject() {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <h1>combine inputs</h1>
      <form action="">
        <label htmlFor="">FirstName</label>{" "}
        <input
          type="text"
          value={user.firstName}
          onChange={(e) => {
            setUser({ ...user, firstName: e.target.value });
          }}
        />
        <label htmlFor="">lastName</label>
        <input
          type="text"
          value={user.lastName}
          onChange={(e) => {
            setUser({ ...user, lastName: e.target.value });
          }}
        />
        <br />
        user: {user.firstName}-{user.lastName}
      </form>
    </div>
  );
}
export default HookObject;
