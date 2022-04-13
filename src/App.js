import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import { RouteWithSubRoutes } from "./components/RouteWithSubRoutes";
import {ROUTES} from "./constants/routes";
import {ROUTESHome} from "./constants/routesHome";

export default function App() {
  return (
    <Router>
      <Routes>
        {ROUTESHome.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
      <div className="app">
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









