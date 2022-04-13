import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import { RouteWithSubRoutes } from "./components/RouteWithSubRoutes";
import {ROUTES} from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Switch>
        {ROUTES.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </Switch>
    </Router>
  );
}









