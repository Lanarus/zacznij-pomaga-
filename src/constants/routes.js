import {Home} from '../components/home/Home';
import {Fundacjom} from '../components/home/helps/Fundacjom';
import {Organizacjom} from '../components/home/helps/Organizacjom';
import {Zbiorkom} from '../components/home/helps/Zbiorkom';

import {ABOUT_US_ROUTE, COLUMNS_ROUTE, HELPS_ROUTE, HOME_ROUTE, KONTACT_ROUTE} from "./routeNames";

export const HELPS_ROOT_PATH = '/fundacja-i-organizacje';

export const HELPS_ROUTES = [
  {
    path: `${HELPS_ROOT_PATH}/fundacjom`,
    component: Fundacjom
  },
  {
    path: `${HELPS_ROOT_PATH}/organizacjom-pozarządowym`,
    component: Organizacjom
  },
  {
    path: `${HELPS_ROOT_PATH}/lokalnym-zbiórkom`,
    component: Zbiorkom
  }
];

export const ROUTES = [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    path: "/o-co-chodzi",
    component: Home
  },
  {
    path: "/o-nas",
    component: Home
  },
  {
    path: HELPS_ROOT_PATH,
    component: Home, // Tutaj to Home dostaje te subrouty, nie HomeHelps. Można by je przekazać przez "props" w Home niżej,
    // Ale niepotrzebnie by to komplikowało kod - wróciłem do przekazania ich bezpośrednio w HomeHelps.
    routes: HELPS_ROUTES
  },
  {
    path: "/kontakt",
    component: Home
  }
];

export const ROUTES_TO_CLASSNAMES_MAP = {
  [HOME_ROUTE]: "home",
  [COLUMNS_ROUTE]: "HomeThreeColumns",
  [ABOUT_US_ROUTE]: "oNas",
  [HELPS_ROUTE]: "komuPomagamy",
  [KONTACT_ROUTE]: "kontact"
};