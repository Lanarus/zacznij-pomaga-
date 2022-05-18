import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from "react-scroll";

import { HomeHeader } from './HomeHeader/HomeHeader';
import { HomeThreeColumns } from './columns/HomeThreeColumns';
import { HomeFourSteps } from './steps/HomeFourSteps';
import { HomeOnas } from './oNas/HomeOnas';
import { HomeKontact } from './kontact/HomeKontact';
import { HomeHelps } from './helps/HomeHelps';

import { ROUTES_TO_CLASSNAMES_MAP } from "../../constants/routes";

export const Home = () => {
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
    </div>
  );
}

