import { Link } from "react-router-dom";
import { Button } from "../../Button/Button";

import './navbar.scss';


export const Navbar = () => {
    return ( 
    <nav className="navbar">
            <Link to="/"><Button>Home</Button></Link>
            <Link to="/o-co-chodzi"><Button>O co chodzi?</Button></Link>
            <Link to="/o-nas"><Button>O nas</Button></Link>
            <Link to="/fundacja-i-organizacje"><Button>Fundacja i organizacje</Button></Link>
            <Link to="/kontact"><Button>Kontact</Button></Link>
    </nav> 
  );
}
 
