import Navbar from '.components/Navbar';
import Home from '.components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeFooter from 'components/HomeFooter';
import HomeFourSteps from 'components/HomeFourSteps';
import HomeHeader from 'components/HomeHeader';
import HomeHelps from 'components/HomeHelps';
import HomeKontact from 'components/HomeKontact';
import HomeOnas from '.components/HomeOnas';
import HomeThreeColumns from 'components/HomeThreeColumns';
//import Logowanie from 'components/Logowanie';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/header">
              <HomeHeader />
            </Route>
            <Route path="/three-columns">
              <HomeThreeColumns />
            </Route>
            <Route path="/four-steps">
              <HomeFourSteps />
            </Route>
            <Route path="/o-nas">
              <HomeOnas />
            </Route>
            <Route path="/komu-pomagamy">
              <HomeHelps />
            </Route>
            <Route path="/skontactuj-się-z-nami">
              <HomeKontact />
            </Route>
            <Route path="/footer">
              <HomeFooter />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;