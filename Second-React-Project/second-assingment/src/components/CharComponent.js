import React, { Component } from "react";

const CharComponent = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlgin: "center",
    margin: "16px",
    border: "1px solid black"
  };
  return (
    <div style={style} onClick={props.click}>
      {props.character}
    </div>
  );
};

export default CharComponent;
