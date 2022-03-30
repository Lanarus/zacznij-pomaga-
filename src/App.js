import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import HomeFooter from 'components/HomeFooter';
import Home from './components/Home';
import HomeFourSteps from './components/HomeFourSteps';
import HomeHeader from './components/HomeHeader';
import HomeHelps from './components/HomeHelps';
import HomeKontact from './components/HomeKontact';
import HomeOnas from './components/HomeOnas';
import HomeThreeColumns from './components/HomeThreeColumns';
import Navbar from './components/Navbar';
import Fundacjom from './components/Fundacjom';
import Organizacjom from './components/Organizacjom';
import Zbiórkom from './components/Zbiórkom';

import RouteWithSubRoutes from "./components/RouteWithSubRoutes";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/start",
    component: HomeHeader
  },
  {
    path: "/o-co-chodzi",
    component: HomeThreeColumns
  },
  {
    path: "/o-co-chodzi",
    component: HomeFourSteps
  },
  {
    path: "/o-nas",
    component: HomeOnas
  },
  {
    path: "/fundacja-i-organizacje",
    component: HomeHelps,

    routes: [
      {
        path: "/fundacja-i-organizacje/fundacjom",
        component: Fundacjom
      },
      {
        path: "/fundacja-i-organizacje/organizacjom-pozarządowym",
        component: Organizacjom
      },
      {
        path: "/fundacja-i-organizacje/lokalnym-zbiórkom",
        component: Zbiórkom
      }
    ]
  },
  {
    path: "/kontakt",
    component: HomeKontact
  }
  
];

export default function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <div className="content">
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>

        </div>

        
      </div>
    </Router>
  );
}









