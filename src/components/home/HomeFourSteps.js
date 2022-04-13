import { Decoration } from './../Decoration/Decoration';
import { Button } from "./../Button/Button";

import Icon1 from '../../assets/Icon-1.svg';
import Icon2 from '../../assets/Icon-2.svg';
import Icon3 from '../../assets/Icon-3.svg';
import Icon4 from '../../assets/Icon-4.svg';
//import { Button } from 'react-scroll/modules';


export const HomeFourSteps = () => {
    return ( 
        <div className="homeFourSteps">
            
            <Decoration text="Wystarczą 4 proste kroki"/>
            <div className="fourSteps">
                <div className='containerSteps'>
                <article>
                <img className="icon" src={Icon1} alt="t-shirt"/>
                <h2>Wybież rzeczy</h2>
                <p className='line'>________</p>
                <p>ubrania, zabawki, sprzęt i inne</p>

                </article>
                <article>
                <img className="icon" src={Icon2} alt="bag"/>
                <h2>Spakuj je</h2>
                <p className='line'>________</p>
                <p>skorzystaj z worków na śmieci</p>

                </article>
                <article>
                <img className="icon" src={Icon3} alt="loupe"/>
                <h2>Zdecyduj komu chcesz pomóc</h2>
                <p className='line'>________</p>
                <p>wybierz zaufane miejsce</p>

                </article>
                <article>
                <img className="icon" src={Icon4} alt="circular arrow"/>
                <h2>Zamów kuriera</h2>
                <p className='line'>________</p>
                <p>kurier przyjedzie w dogodnym terminie</p>

                </article>
                </div>
            </div>
            <div className='btnSteps'>
            <Button>ODDAJ RZECZY</Button>
            </div>
        </div>
     );
}
 
