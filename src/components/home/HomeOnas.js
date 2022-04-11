import { Decoration } from './../Decoration/Decoration';
import OnasImage from '../../assets/People.jpg';

import Signature from '../../assets/Signature.svg';
        



const HomeOnas = () => {
    return ( 
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
  );
}
 
export default HomeOnas;