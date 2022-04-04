import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";

import RouteWithSubRoutes from "./RouteWithSubRoutes";

const HomeHelps = ({ routes }) => {
  return (
    <div>
      <h2>Komu pomagamy</h2>
      <ul>
        <li>
          <Link to="/fundacja-i-organizacje/fundacjom">Fundacjom</Link>
        </li>
        <li>
          <Link to="/fundacja-i-organizacje/organizacjom-pozarządowym">Organizacjom pozarządowym</Link>
        </li>
        <li>
          <Link to="/fundacja-i-organizacje/lokalnym-zbiórkom">Lokalnym zbiórkom</Link>
        </li>
      </ul>

    <Router>
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
    </Router>
    </div>
  );
}
 
export default HomeHelps;