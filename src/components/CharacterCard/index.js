import React from "react";
import "./style.css";

function CharacterCard(props){
  return (
    <div className="char-card" data-name={props.name} onClick={() => props.onClick(props.name)}>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default CharacterCard;
