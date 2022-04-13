import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { HomeHeader } from './HomeHeader/HomeHeader';
import { HomeThreeColumns } from './HomeThreeColumns';
import { HomeFourSteps } from './HomeFourSteps';
import { HomeOnas } from './HomeOnas';
import { HomeKontact } from './HomeKontact';
import { HomeFooter } from './HomeFooter';
import { HomeHelps } from './helps/HomeHelps';

import { scroller } from "react-scroll";
import { ROUTES_TO_CLASSNAMES_MAP } from "../../constants/routesHome";

export const Home = (props) => {
  
  const pathname = useLocation().pathname;

  useEffect(() => {
    const scrollElement = ROUTES_TO_CLASSNAMES_MAP[pathname];
    if (scrollElement) {
      console.log("MATCHED", scrollElement);
      scroller.scrollTo(scrollElement, {
        duration: 1000,
        delay: 50,
        smooth: "easeInOutQuint"
      });
    }
  }, [pathname]);
  
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

