import React from "react";
import "./Style.css";
import Style from "./AppStyle.module.css";


function StyleSheet(props) {
  let className = props.isvalue ? "demo" : "demo1";

  return (
    <div>
      <h1 className={`${className} demo2 `}>CSS Styling with React</h1>
      <h1 className="failure">Failure</h1>
      <h1 className={Style.success}>Green</h1>
    </div>
  );
}
export default StyleSheet;
