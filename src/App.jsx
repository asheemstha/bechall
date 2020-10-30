import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.scss";
const App = () => {
  return (
    <Router basename="/bechall">
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
