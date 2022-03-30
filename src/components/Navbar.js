import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
    <nav className="navbar">
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/o-co-chodzi">O co chodzi?</Link>
            <Link to="/o-nas">O nas</Link>
            <Link to="/fundacja-i-organizacje">Fundacja i organizacje</Link>
            <Link to="/kontakt">Kontakt</Link>
        </div>
    </nav> 
  );
}
 
export default Navbar;