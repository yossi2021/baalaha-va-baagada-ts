import { Link, NavLink } from "react-router-dom";

function Header() {
    return ( 
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand " href="http://localhost:3000/">
                <i className="bi-book me-2"></i>
                    בהלכה ובאגדה
            </a>
            
            <ul className="navbar-nav flex-row">
                <li className="nav-item me-3">
                    <NavLink to="/AboutUs" className="nav-link">
                        AboutUs
                    </NavLink>
                </li>
            </ul>    
        </div>
    </nav>
     );
}

export default Header;