import { Home } from "../components/home/Home";



import { HOME_ROUTE, COLUMNS_ROUTE, ABOUT_US_ROUTE, HELPS_ROUTE, KONTACT_ROUTE} from "./routeNames";

// Tego uzyjemy do mapowania url-i na scrollowanie do elementów oraz w klasach obiektów
// Klucze to ścieki, a wartości to klasy których uzyjemy w elementach
// Dzięki takiej hierarchii trudniej popełnić literówki i łatwiej przepisywać kod
export const ROUTES_TO_CLASSNAMES_MAP = {
  [HOME_ROUTE]: "home",
  [COLUMNS_ROUTE]: "HomeThreeColumns",
  [ABOUT_US_ROUTE]: "oNas",
  [HELPS_ROUTE]: "komuPomagamy",
  [KONTACT_ROUTE]: "kontact"

};

export const ROUTESHome = [
  // Zauwaz, ze mamy kilka razy powtorzony Home, ale dla róznych ściezek
  // Przyjrzyj sie, jak reagujemy na zmiany ściezek w Home.
  {
    path: HOME_ROUTE,
    element: <Home />
  },
  {
    path: COLUMNS_ROUTE,
    element: <Home />
  },
  {
    path: ABOUT_US_ROUTE,
    element: <Home />
  },
  {
    path: HELPS_ROUTE,
    element: <Home />
  },
  {
    path: KONTACT_ROUTE,
    element: <Home />
  }
];