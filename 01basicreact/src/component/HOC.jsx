import React from "react";
const Subjects = (STUDENT) => {
  class Subject extends React.Component {
    render() {
      return (
        <STUDENT hocSub="Java" Sub2="python" Sub3="javaScript"></STUDENT>
      );
    }
  }
  return Subject;
};
export default Subjects;
