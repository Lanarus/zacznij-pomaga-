import {Decoration} from '../../Decoration/Decoration';
import {Button} from "../../Button/Button";
import './kontact.scss'
import {Element} from "react-scroll";

import {ROUTES_TO_CLASSNAMES_MAP} from "../../../constants/routes";
import {KONTACT_ROUTE} from "../../../constants/routeNames";
import {HomeFooter} from "../footer/HomeFooter";

export const HomeKontact = () => {
  return (
    <Element
      name={ROUTES_TO_CLASSNAMES_MAP[KONTACT_ROUTE]}>
      <div className="homeKontact">
        <div className="imageWrapper"/>
        <div className="formContent">
          <div className="decKontact">
            <Decoration text="Skontaktuj się z nami"/>
          </div>
          <div className='form'>
            <div className='input'>
              <div className='formfield'>
                <label className='formlabel'>Wpisz swoje imię</label>
                <input
                  type="text"
                  required
                />
              </div>
              <div className='formfield'>
                <label className='formlabel'>Wpisz swój email</label>
                <input
                  type="text"
                  required
                />
              </div>
            </div>
            <div className='formfield'>
              <label className='formlabel'>Wpisz swoją wiadomość</label>
              <textarea>
              
            </textarea>
            </div>
          </div>
          <div className='btnKontact'>
            <Button>Wyślij</Button>
          </div>
        </div>
        <div className="spacer"/>
        <HomeFooter/>
      </div>
    </Element>
  );
}
 
