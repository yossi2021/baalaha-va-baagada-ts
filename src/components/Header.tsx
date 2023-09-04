import { NavLink, useNavigate } from "react-router-dom";
import Logout from "../auth/Logout";
import User from "./User";
import { useEffect, useState } from "react";

function Header() {
    const [userName, setUserName] = useState('');

    const navigate= useNavigate();

    useEffect(() => {
        const name = localStorage.getItem('user');
        if (!name) return;
        setUserName(name);
    }, [])

        function handleLogout(){
            localStorage.clear();
            setUserName('')
            navigate('/login');
        }
    
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
    
        <User  userName={userName}/>
    </header>

    
     );
}

export default Header;