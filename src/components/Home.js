import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "../styles/Home.css";
import profileImg from "../images/alicia-pic.jpg";
import allEntryData from "../data/entry-data.json";

function createCard(cardData) {
  var routePath = "/components/entry" + cardData.date;
  return (
    <Link to={routePath}>
      <Card
        key={cardData.key}
        date={cardData.date}
        imgCode={cardData.imgCode}
      />
    </Link>
  );
}

function createCardGrid(dataArray) {
  return (
    <div className="card-grid">
      {/* <div className="container-card-row"> */}
        {dataArray.map(createCard)}
      {/* </div> */}
    </div>
  );
}

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
        <h1>ALICIA'S FOOD JOURNAL</h1>
        <p>Kind of like a food blog, but more lo-fi.</p>
      </header>
      {createCardGrid(allEntryData)}
    </main>
  );
}
