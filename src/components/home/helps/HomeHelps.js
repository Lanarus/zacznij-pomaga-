import React from "react";
import { RouteWithSubRoutes } from "../../RouteWithSubRoutes";
import { Button } from "../../Button/Button";
import { Decoration } from '../../Decoration/Decoration';
import {
  Switch,
  Link
} from "react-router-dom";
import { HELPS_ROUTES } from "../../../constants/routes";

import { Element } from "react-scroll";

import { ROUTES_TO_CLASSNAMES_MAP } from "../../../constants/routes";
import { HELPS_ROUTE } from "../../../constants/routeNames";

import './helpsHome.scss';

export const HomeHelps = () => {
  return (
    <Element 
     name={ROUTES_TO_CLASSNAMES_MAP[HELPS_ROUTE]}>
    <div className="homeHelps">
     <div className="decoration"> 
            <Decoration text="Komu pomagamy?"/>
          </div>
      <div className="whoHelps">
      <ul>
        <li>
          <Link to="/fundacja-i-organizacje/fundacjom"><Button>Fundacjom</Button></Link>
        </li>
        <li>
          <Link to="/fundacja-i-organizacje/organizacjom-pozarządowym"><Button>Organizacjom pozarządowym</Button></Link>
        </li>
        <li>
          <Link to="/fundacja-i-organizacje/lokalnym-zbiórkom"><Button>Lokalnym zbiórkom</Button></Link>
        </li>
      </ul>
      </div>

      
      <div className="variantsHelps">
      <Switch>
        {HELPS_ROUTES.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      </div>
    </div>
    </Element>
  );
}
 
