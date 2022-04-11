import { Decoration } from '../../Decoration/Decoration';
import HeaderImage from './Home-Hero-Image.jpg';
import { Button } from "../../Button/Button";

const HomeHeader = () => {
    return ( 
   
      <div className="HomeHeader">
        <div className="hImg">
          <img className="headerImage" src={HeaderImage} alt="header image"/>
        </div>
     
        <div className='containerHeader'>
          <div className="decoration"> 
            <Decoration text="Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce"/>
          </div>
        
          <div className='headerBtn'>
            <Button>ODDAJ RZECZY</Button>
            <Button>ZORGANIZUJ ZBIÓRKĘ</Button> 
          </div>
        </div>
      </div> 
   
  );
}
 
export default HomeHeader;
/*
<div className="homeImg" src = "assets/Home-Hero-Image.jpg" alt= "home image"/>
*/

