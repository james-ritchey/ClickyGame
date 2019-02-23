import React from "react";
import "./style.css";

function Header(props){
  return (
    <div className="header">
      <p className="title">Clicky Game</p>
      <p className="info">{props.info}</p>
      <p className="score">Score: {props.score} | High Score: {props.highScore}</p>
    </div>
  );
}

export default Header;
