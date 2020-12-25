import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Scorecard from "./Scorecard"
import RecipeCard from "./RecipeCard";
import "../styles/Entry.css";

export default function Entry(props) {
  return (
    <div>

      <Navbar/>

      <header className="Entry-heading">
        <h1>{props.name}</h1>
        <h2>{props.date}</h2>
      </header>

      <div className="Entry-body">

        <img
          className="food-photo"
          src={require(`../images/${props.imgCode}.jpg`)}
          alt="Food Photo"
        />

        <div className="entry-body-right-panel">
          <div className="entry-text-container">
            <p>{props.text}</p>
          </div>

          {/* <div className="scorecard">
            <Scorecard sweetScore={props.sweetScore} />
          </div> */}

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
