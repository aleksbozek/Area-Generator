import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import HomePage from "./components/HomePage.jsx";
import BuildPage from "./components/BuildPage.jsx";
import Gallery from "./components/Gallery.jsx";
import { Link, Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [build, setBuild] = useState([]);

  useEffect(() => {
    // const airURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Build?Grid%20View`
    const airURL = `https://api.airtable.com/v0/appT8SRRw9eOl8WmR/Build?Grid%20View`;
    const getInfo = async () => {
      const res = await axios.get(airURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });

      console.log(res.data);
      setBuild(res.data.records);
    };
    // getInfo();
    console.log("mounted successfully");
  }, []);

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
          <Route exact path="/Build">
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
