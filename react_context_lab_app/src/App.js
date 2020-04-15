import React, { createContext } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Weather from "./components/Weather";
import Clock from "./components/Clock";
import WeatherProvider from "./providers/WeatherProvider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/weather"}>
          <WeatherProvider>
            <Weather />
          </WeatherProvider>
        </Route>
        <Route exact path={"/clock"}>
          <Clock />
        </Route>
      </Switch>
    </div>
  );
}

export default App;