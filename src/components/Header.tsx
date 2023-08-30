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
                        className="nav-link"
                        aria-current="page"
                        to="/Order"
                        >
                            לאן לשלוח
                        </NavLink>
                </li>

                <li className="nav-item me-3">
                    <NavLink                         
                        className="nav-link"
                        aria-current="page"
                        to="/AboutUs"
                        >
                            אודותינו
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink                         
                        className="nav-link"
                        aria-current="page"
                        to="/signup"
                        >
                            הרשם כאן
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink 
                        className="nav-link"
                        aria-current="page"
                        to="/login"
                        >
                           התחבר
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink                         
                        className="nav-link"
                        aria-current="page"
                        to="/signout"
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