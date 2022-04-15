import { Decoration } from '../../Decoration/Decoration';
import OnasImage from '../oNas/People.jpg';

import Signature from '../oNas/Signature.svg';
import './oNasHome.scss';


import { Element } from "react-scroll";

import { ROUTES_TO_CLASSNAMES_MAP } from "../../../constants/routes";
import { ABOUT_US_ROUTE } from "../../../constants/routeNames";

export const HomeOnas = () => {
    return ( 
     <Element 
     name={ROUTES_TO_CLASSNAMES_MAP[ABOUT_US_ROUTE]}>
    <div className="homeOnas">
      <div className='contentOnas'>
        <div className="decoration"> 
          <Decoration text="O nas"/>
        </div>
          <p>Nori grape silver beet broccoli kombu beet
         greens fava bean potato quandong celery. Bunya nuts black-eyed
          pea prairie turnip leek lentil turnip greens parsnip.
          </p>
          <img className="signature" src={Signature} alt="signature"/>
      </div>

      <div className="onasImg">
        <img className="onasImage" src={OnasImage} alt="peopleimage"/>
      </div>
    
    </div> 
    </Element> 
  );
}
 
