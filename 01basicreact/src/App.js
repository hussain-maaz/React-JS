import React from "react";
import Worldcup from "./Worldcup";
import Header from "./component/Header";
import Cheader from "./component/Cheader";
import Channel from "./component/Channel";
import NewFun from "./component/FunctionClicked";
import CfuntionClick from "./component/CfunctionClick";
import StyleSheet from "./component/StyleSheet";
import Inline from "./component/Inline";
// import "./component/AppStyle.css";
// import Style from "./component/AppStyle.module.css";
// import Form from "./component/Form";
// import Routing from "./component/Routing";
import LifeCycle from "./component/LifeCycle";
import Product from "./component/Product";
import PostList from "./component/PostList";
// import PostForm from "./component/PostForm";
import HookCounter from "./component/HookCounter";
import HookObject from "./component/HookObject";
import HookArray from "./component/HookArray";
import ClassPositionXY from "./component/ClassPositionXY";
import FunctionPositionXY from "./component/FunctionPositionXY";
import Ajay from "./component/Ajay";
import Vikas from "./component/Vikas";
import Sushant from "./component/Sushant";
import Calculator from "./component/Calculator";
import Style from "./component/StyleCal.css"

import A from "./component/A";

class App extends React.Component {
  render() {
    // const numbers = [5, 6, 7, 8];
    return (
      <>
        {/* <Ajay></Ajay> */}
       <div className="app-container"> <Calculator></Calculator></div>
        {/* <Sushant></Sushant>
        <Vikas></Vikas> */}

        {/* <A name="Maaz Hussain"></A> */}
        {/* <ClassPositionXY></ClassPositionXY> */}
        {/* <FunctionPositionXY></FunctionPositionXY> */}
        {/* <HookArray></HookArray> */}
        {/* <HookObject></HookObject> */}
        {/* <HookCounter></HookCounter> */}
        {/* <LifeCycle></LifeCycle> */}
        {/* <LifeCycle></LifeCycle> */}
        {/* <LifeCycle></LifeCycle> */}
        {/* <PostList></PostList> */}
        {/* <PostForm></PostForm> */}
        {/* <Product></Product> */}
        {/* <Routing></Routing> */}
        {/* <Form></Form> */}
        {/* <h1 className={Style.success}>Green</h1>
      <h1 className='failure'>Failure</h1>
        <StyleSheet isvalue={false}></StyleSheet>
        <Inline></Inline> */}

        {/* <h1>its mi 1st React-Web-App</h1>
        <Header name="deCock" player="wicket">
          <p>this is the african trump-card team</p>
        </Header>
        <Header name="miller" player="finisher"></Header>
        <Header name="rabada" player="bowler"></Header>
        <Cheader name="williamson" player="BatsMen"></Cheader>
        <Channel></Channel>
        <NewFun numbers={numbers}></NewFun>
        <CfuntionClick></CfuntionClick> */}
      </>
    );
  }
}

export default App;
