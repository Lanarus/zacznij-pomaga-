import { Decoration } from '../../Decoration/Decoration';
import HeaderImage from './Home-Hero-Image.jpg';
import { Button } from "../../Button/Button";
import { Logowanie } from '../../login/Logowanie';
import { Navbar} from '../nav/Navbar';

import './HomeHeader.scss';

export const HomeHeader = () => {
    return ( 
      <div className="HomeHeader">
        <Logowanie/>
        <Navbar/>

        <div className='containerImage'>
          <div className="headerImage">
            <img src={HeaderImage} alt="header image"/>
          </div>  
        </div>
     
        <div className='containerHeader'>
          <div className="decoration"> 
            <Decoration size={"small"} text={<>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</>}/>
          </div>
        
          <div className='containerBtn'>
            <Button className="btn" forceBorder height="75px" width="200px" size="big" style={{backgroundColor: 'white'}}>ODDAJ RZECZY</Button>
            <Button className="btn" forceBorder height="75px" width="200px" size="big">ZORGANIZUJ ZBIÓRKĘ</Button> 
          </div>
        </div>
      </div> 
  );
}
 

/*
<div className="homeImg" src = "assets/Home-Hero-Image.jpg" alt= "home image"/>
*/

