import React from "react";
import "./Operation.css";

const Abstract = props => {
  return <div className="Abstract btn" onClick={props.onClick}>{props.sign}</div>;
};

export default Abstract;