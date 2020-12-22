import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Entry from "./components/Entry";
import allEntryData from "./data/entry-data.json"

function createEntry(entryData) {
  //function that creates both route to the entry and Entry component
  var routePath = "/components/entry" + entryData.date
  return(
    <Route 
      path={routePath}
      key={entryData.key}
    >
      <Entry
      key={entryData.key}
      name={entryData.name}
      date={entryData.date}
      imgPath={entryData.imgPath}
      imgCode={entryData.imgCode}
      text={entryData.text}
      sweetScore={entryData.sweetScore}
      recipeType={entryData.recipeType}
      recipeUrl={entryData.recipeUrl}
      recipeLinkText={entryData.recipeLinkText}
      recipeText={entryData.recipeText}
      />
    </Route>
  )
}

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          {allEntryData.map(createEntry)}
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
