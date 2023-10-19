import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // let obj = {
  //   // username: "Gill",
  //   // score: 121,
  // };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-10">
        {" "}
        Tailwind Test{" "}
      </h1>
      <Card
        username="Gill"
        btnText="please visit"
        para="i am learning mi React library to master front-end"
      ></Card>
      <Card username="Rizyy"></Card>
      <Card username="michel" ></Card>
    </>
  );
}

export default App;
