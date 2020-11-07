import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "../styles/Home.css";
import profileImg from "../images/alicia-pic.jpg";
// import {Link} from "react-router-dom"
// import FirstPost from "../components/posts/first-post"

export default function Home() {
  return (
    <main>
      <div className="Home-navbar">
        <div className="nav-link-container">
          <Link to="/">Journal</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <header className="Home-header">
        <h1>FLYING LYCHEE</h1>
        <h3>A Food Journal</h3>
        <p>Kind of like a food blog, but more lo-fi.</p>
      </header>
      <div className="container-card-row">
        <Link to="/components/entry">
          <Card />
        </Link>
        <Card />
        <Card />
      </div>
      <div className="about-panel">
        <div className="container-about-me">
          <h2>ABOUT ME</h2>
          <img className="profile-img" src={profileImg} alt="Profile Picture" />
        </div>
        <p className="bio">
          Hello! My name is Alicia- Welcome to my food journal! I wanted to make
          a diary of my cooking / baking attempts, so here we are. I'm keeping
          things simple- so each entry just has a photo, some notes about what I
          remember about making/eating the dish, and link to the recipe I used
          if it's not my own. There might also be some spicy-hot-take scale
          ratings included too- who knows.{" "}
        </p>
      </div>
      <div className="card-grid">
        <div className="container-card-row">
          <Card />
          <Card />
          <Card />
          <div />
        </div>
      </div>
    </main>
  );
}
