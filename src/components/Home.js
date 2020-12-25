import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
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
        routePath={routePath}
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
      <Navbar/>
      <header className="Home-header">
        <h1>ALICIA'S FOOD JOURNAL</h1>
        <p>Kind of like a food blog, but more lo-fi.</p>
      </header>
      {createCardGrid(allEntryData)}
    </main>
  );
}
