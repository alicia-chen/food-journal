import React from "react";
import '../styles/RecipeCard.css'

function LinkRecipe(props) {
  return (
    <div className="recipe-link-container">
      <p>
        <str>Recipe from: </str>
        <a href={props.recipeUrl}>{props.recipeLinkText}</a>
      </p>
    </div>
  );
}

function OriginalRecipe(props) {
  return (
    <div className="recipe-container">
      <p style={{ whiteSpace: "pre-line" }}>{props.recipeText}</p>
    </div>
  );
}

export default function(props) {
  let recipe;
  if (props.recipeType === "link") {
    recipe = (
      <LinkRecipe
        recipeUrl={props.recipeUrl}
        recipeLinkText={props.recipeLinkText}
      />
    );
  } else {
    recipe = (
      <OriginalRecipe
        recipeText={props.recipeText}
      />
    );
  }
  return (
    <div>
      {recipe}
    </div>
  )
}