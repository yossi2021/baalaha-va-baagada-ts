import { NavLink } from "react-router-dom";
import Logout from "../auth/Logout";
import User from "./User";

interface Props {
    userName: string;
    handleLogout: Function;
}

function Header({userName, handleLogout} : Props) {
    return ( 
        <header>
    <nav className="navbar navbar-dark bg-dark ">
        <div className="container-fluid">
            <a className="navbar-brand " href="/">
                <i className="bi-book me-2"></i>
                    בהלכה ובאגדה
            </a>
            
            <ul className="navbar-nav flex-row">
                
                <li className="nav-item me-3">
                    <NavLink 
                        className="nav-link"
                        aria-current="page"
                        to="/Offers" 
                        >
                            המבצעים שלנו
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink  
                        className="nav-link"
                        aria-current="page"
                        to="/books"
                        >
                            הספרים שלנו
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
                <li className="nav-item">
                    <Logout  handler={handleLogout}/>
                </li>
            </ul>    
        </div>
    </nav>
    
        <User  userName={userName} />
    </header>

    
     );
}

export default Header;