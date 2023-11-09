import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../auth/Logout";
import User from "./User";
import { AppContext } from "../App";

function Header() {
    const context = useContext(AppContext);
    const isLoggedIn = context && context.userName.length> 0;

    return ( 
        <>
        <header className="sticky-sm-top">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="display-grid ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <a className="navbar-brand " href="./">
                <i className="bi-book me-2"> </i>
                    בהלכה ובאגדה
            </a> */}
            
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center ">
                <li className="nav-item me-3">
                    <NavLink                         
                        className="nav-link"
                        aria-current="page"
                        to="/"
                        >
                            <i className="bi-book ms-2"> </i>
                            דף הבית
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
                        to="/Offers" 
                        >
                            הספרים שלנו
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink  
                        className="nav-link"
                        aria-current="page"
                        to="/Books"
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
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center ">
                
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
             
        </div>
        <User/>
    </nav>
    
        
    </header>
    
</>
    
     );
}

export default Header;