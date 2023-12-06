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
        
        <header className=" sticky-top z-3 lead "  >
    <nav className="navbar navbar-expand-lg colorbrown1 ">
        <div className="display-grid mx-1 pb-1 pt-1">

        <button className="navbar-toggler m-1 z-2 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon ms-5 px-3 "><h6 className="px-4 pb-1 text-light">בהלכה ובאגדה</h6></span>
            </button>
            
            <div>
            <div className="collapse navbar-collapse px-2 " id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center ">

                <li className="nav-item  ">
                    <NavLink                         
                        className="nav-link hover"
                        aria-current="page"
                        to="/"
                        >
                            <i className="bi-book ms-1"> </i>
                            דף הבית
                    </NavLink>
                </li>
                <li className="nav-item me-2">
                    <NavLink                         
                        className="nav-link hover"
                        aria-current="page"
                        to="/AboutUs"
                        >
                            אודותינו
                    </NavLink>
                </li>
                
                <li className="nav-item me-2">
                    <NavLink 
                        className="nav-link hover"
                        aria-current="page"
                        to="/Offers" 
                        >
                        ספרים ומבצעים
                    </NavLink>
                </li>
                <li className="nav-item me-2">
                    <NavLink  
                        className="nav-link hover"
                        aria-current="page"
                        to="/Books"
                        >
                            הזמנות
                    </NavLink>
                </li>
                
                
                <li className="nav-item me-2">
                    <NavLink                         
                        className="nav-link hover"
                        aria-current="page"
                        to="/Order"
                        >
                        צור קשר
                        </NavLink>
                </li>

                
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                
                {
                    !isLoggedIn &&
                    <>
                        <li className="nav-item me-2">
                            <NavLink                         
                                className="nav-link hover "
                                aria-current="page"
                                to="/signup"
                                >
                                    הרשמה
                            </NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink 
                                className="nav-link hover "
                                aria-current="page"
                                to="/login"
                                >
                                התחבר
                            </NavLink>
                        </li>
                        <li className="nav-item me-2 ">
                    <NavLink 
                        className="nav-link hover "
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
                    <li className="nav-item hover ">
                    <Logout />
                    
                    </li>
                }
                 <div className="p-1">
            <User/>
            </div>
            </ul>

            </div> 
            </div>

        </div>
        {/* <p className="p-1 m-1 text-light ">בהלכה ובאגדה</p> */}

    </nav>
        
    </header>
    
</>
    
     );
}

export default Header;