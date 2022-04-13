import Instagram from '../../assets/Instagram.svg';
import Facebook from '../../assets/Facebook.svg';

export const HomeFooter = () => {
    return ( 
        <div className="homeFooter">
            <div className='footerContent'>
            <div className="copyright">
                <h6>Copyright by Coders Lab</h6>
            </div>
            <div className="icons">
            <img className="Instagram" src={Instagram} alt="Instagram"/>
            <img className="Facebook" src={Facebook} alt="Facebook"/>
            </div>
            </div>
            
        </div>
     );
}
 
