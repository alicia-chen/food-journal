import React from "react";
import { Link } from "react-router-dom";
import Scorecard from "./Scorecard"
import RecipeCard from "./RecipeCard";
import "../styles/Entry.css";

export default function Entry(props) {
  // console.log("hello world")
  // console.log(props.imgCode)
  // console.log(props.imgPath)
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
        <h1>{props.name}</h1>
        <h1>{props.date}</h1>
      </div>

      <div className="Entry-body">
        {/* <img className="food-photo" src={require(`${props.imgPath}`)} alt="Food Photo" /> */}
        <img
          className="food-photo"
          src={require(`../images/${props.imgCode}.jpg`)}
          alt="Food Photo"
        />

        <div className="entry-body-right-panel">
          <div className="entry-text-container">
            <p>{props.text}</p>
          </div>

          <div className="scorecard">
            <Scorecard sweetScore={props.sweetScore} />
          </div>

          <RecipeCard
            recipeType={props.recipeType}
            recipeUrl={props.recipeUrl}
            recipeLinkText={props.recipeLinkText}
            recipeIgHandle={props.recipeIgHandle}
            recipeText={props.recipeText}
          />
        </div>
      </div>
    </div>
  );
}
