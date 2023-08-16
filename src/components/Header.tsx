import { Link, NavLink } from "react-router-dom";

function Header() {
    return ( 
    <nav className="navbar navbar-dark bg-dark ">
        <div className="container-fluid">
            <a className="navbar-brand " href="/">
                <i className="bi-book me-2"></i>
                    בהלכה ובאגדה
            </a>
            
            <ul className="navbar-nav flex-row">
                
                <li className="nav-item me-3">
                    <NavLink to="/Offers" className="nav-link">
                        המבצעים שלנו
                    </NavLink>
                </li>
                
                <li className="nav-item me-3">
                    <NavLink to="/Order" className="nav-link">
                        לאן לשלוח
                        </NavLink>
                </li>

                <li className="nav-item me-3">
                    <NavLink to="/AboutUs" className="nav-link">
                        אודותינו
                    </NavLink>
                </li>
            </ul>    
        </div>
    </nav>
    

    
     );
}

export default Header;