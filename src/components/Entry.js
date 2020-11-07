import React from "react";
import { Link } from "react-router-dom";
import "../styles/Entry.css";
import foodImg from "../images/mango-crepe.jpg";

export default function Entry() {
  return (
    <div>
      <div className="Entry-navbar">
        <div className="title-container">
          <h1>FLYING LYCHEE</h1>
        </div>
        <div className="nav-link-container">
          <Link to="/">Journal</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <div className="Entry-heading">
        <h1>Mango Crepe</h1>
      </div>

      <div className="Entry-body">
        <img className="food-photo" src={foodImg} alt="Food Photo" />
        <div className="entry-body-right-panel">
          <div className="entry-text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="scorecard">
            <h3>Scorecard</h3>
            <p>Savory vs Sweet: 10</p>
          </div>

          <div className="recipe-container">
            <h3>Recipe from:</h3>
            <p><a href="https://www.instagram.com/p/CCGbqMcHO4H/">@dafengpork on Instagram</a></p>
          </div>

        </div>
      </div>
    </div>
  );
}
