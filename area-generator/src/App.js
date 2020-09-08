import React from "react";
import "./App.css";
import HomePage from "./components/HomePage.jsx";
import BuildPage from "./components/BuildPage.jsx";
import Gallery from "./components/Gallery.jsx";
import { Link, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Build">Build</Link>
        <Link to="/Gallery">Gallery</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <h1>You're on the home page.</h1>
            <HomePage />
          </Route>
          <Route path="/Build">
            <h1>You're on the build page.</h1>
            <BuildPage />
          </Route>
          <Route path="/Gallery">
            <h1>Gallery Page</h1>
            <Gallery />
          </Route>
          <Route path="/:404">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
