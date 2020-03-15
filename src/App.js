import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Application from "./components/Application";
import VPNCard from "./components/VPNCard";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/vpn/download">
          <VPNCard />
        </Route>
        <Route path="/">
          <div className="App">
            <Application />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
