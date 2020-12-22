import React from "react";
import "../styles/Scorecard.css";

export default function(props) {
  return (
    <div className="scorecard-container">
      <h3>Scorecard</h3>
      <p>Savory vs Sweet:</p>
      <div className="tick-label-container">
        <strong>
          <p className="tick-label-one">1</p>
        </strong>
        <strong>
          <p className="tick-label-ten">10</p>
        </strong>
      </div>
      <div className="scale-bar">
        <div className="one-tick"></div>
        <div className="ten-tick"></div>
      </div>
      <p>{props.sweetScore}</p>
    </div>
  );
}
