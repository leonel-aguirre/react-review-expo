import "./App.scss";

import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import CounterList from "./CounterList/CounterList";
import CounterCreator from "./CounterCreator/CounterCreator";

const darkThemeStyles = {
  backgroundColor: "#333333",
  color: "#ffffff",
};

const App = () => {
  const isDarkThemeEnabled = useSelector((state) => state.darkTheme.isEnabled);

  return (
    <Router>
      <NavBar />
      <div
        className="app__container"
        style={isDarkThemeEnabled ? darkThemeStyles : null}
      >
        <Switch>
          <Route path="/counters">
            <CounterList />
          </Route>
          <Route path="/counter-creator">
            <CounterCreator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
