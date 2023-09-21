import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../auth/Logout";
import User from "./User";
import { AppContext } from "../App";

function Header() {
    const context = useContext(AppContext);
    const isLoggedIn = context && context.userName.length> 0;

    return ( 
        <header className="sticky-sm-top">
    <nav className="navbar navbar-dark bg-dark ">
        <div className="container-fluid">
            <a className="navbar-brand " href="/">
                <i className="bi-book me-2"> </i>
                    בהלכה ובאגדה
            </a>
            
            <ul className="navbar-nav flex-row">
                
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
                        to="/Offers" 
                        >
                            הספרים שלנו
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink  
                        className="nav-link"
                        aria-current="page"
                        to="/books"
                        >
                            הזמנות
                    </NavLink>
                </li>
                
                
                <li className="nav-item me-3">
                    <NavLink                         
                        className="nav-link"
                        aria-current="page"
                        to="/Order"
                        >
                        צור קשר
                        </NavLink>
                </li>

                
                </ul>
                <ul className="navbar-nav flex-row">
                
                {
                    !isLoggedIn &&
                    <>
                        <li className="nav-item me-3">
                            <NavLink                         
                                className="nav-link"
                                aria-current="page"
                                to="/signup"
                                >
                                    הרשמה
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
                        to="/admin" 
                        >
                            מנהל בלבד
                    </NavLink>
                </li>
                    </>
                }
                {
                    isLoggedIn &&
                    <li className="nav-item">
                    <Logout />
                    </li>
                }
                
            </ul>    
        </div>
    </nav>
    
        <User />
    </header>

    
     );
}

export default Header;