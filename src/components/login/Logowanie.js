import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
//import Zaloguj from "./Zaloguj";
//import ZałóżKonto from "./ZałóżKonto";



export const Logowanie = () => {
    return ( 
    <div className="logowanie">
      <Link to="/logowanie"><Button>Zaloguj się</Button></Link>
      <Link to="/rejestrscja"><Button>Założ konto</Button></Link>
    </div> 
  );
}
 
