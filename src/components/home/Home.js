import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeFourSteps from './HomeFourSteps';
import HomeOnas from './HomeOnas';
import HomeKontact from './HomeKontact';
import HomeFooter from './HomeFooter';
import HomeHelps from './helps/HomeHelps';

const Home = (props) => {
  console.log(props); // Tutaj zobaczysz po wejściu na "Fundacja i Organizacje" propsa "routes" który powinien być niżej
  return (
    <div className="home">
      <HomeHeader/>
      <HomeThreeColumns/>
      <HomeFourSteps/>
      <HomeOnas/>
      <HomeHelps/>
      <HomeKontact/>
      <HomeFooter/>
    </div>
  );
}

export default Home;