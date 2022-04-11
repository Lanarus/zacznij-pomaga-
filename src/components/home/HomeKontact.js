import { Decoration } from '../Decoration/Decoration';
import { Button } from "../Button/Button";

const HomeKontact = () => {
    return ( 
    <div className="homeKontact">
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
  </div> 
  );
}
 
export default HomeKontact;