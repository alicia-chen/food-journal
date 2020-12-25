import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Card.css";

function Card(props) {
  // console.log("Card:imgCode:", props.imgCode)
  return (
    <div className="card">
      <div className="cardTop">
          <h4 className="cardDate">{props.date}</h4>
      </div>
      <div className="cardBottom">
        <img
          className="cardImage"
          src={require(`../images/${props.imgCode}.jpg`)}
          alt={props.imgCode}
        />
      </div>
    </div>
  );
}

export default Card;
