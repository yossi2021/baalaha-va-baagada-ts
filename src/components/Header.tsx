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
                    <NavLink 
                        to="/Offers" 
                        className="nav-link"
                        aria-current="page"
                        >
                            המבצעים שלנו
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink 
                        to="/books" 
                        className="nav-link"
                        aria-current="page"
                        >
                            הספרים שלנו
                    </NavLink>
                </li>
                
                <li className="nav-item me-3">
                    <NavLink 
                        to="/Order" 
                        className="nav-link"
                        aria-current="page"
                        >
                            לאן לשלוח
                        </NavLink>
                </li>

                <li className="nav-item me-3">
                    <NavLink 
                        to="/AboutUs" 
                        className="nav-link"
                        aria-current="page"
                        >
                            אודותינו
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink 
                        to="/signup" 
                        className="nav-link"
                        aria-current="page"
                        >
                            הרשם כאן
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink 
                        to="/signin" 
                        className="nav-link"
                        aria-current="page"
                        >
                           התחבר
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink 
                        to="/signout" 
                        className="nav-link"
                        aria-current="page"
                        >
                            התנתק
                    </NavLink>
                </li>
            </ul>    
        </div>
    </nav>
    

    
     );
}

export default Header;