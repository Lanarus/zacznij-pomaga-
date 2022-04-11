import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import Navbar from './components/Navbar';
import Logowanie from "./components/login/Logowanie";

import { RouteWithSubRoutes } from "./components/RouteWithSubRoutes";
import {ROUTES} from "./constants/routes";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Logowanie/>
        <Navbar/>
        <div className="content">
          <Switch>
            {ROUTES.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}









