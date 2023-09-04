/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import { removeToken } from "./tokenMgmt";

function  Logout() {
        const navigate = useNavigate();
        
        function handleLogout(): void{
            // removeToken();
            localStorage.clear();
            navigate('/login');
        }

    return ( 
           
            <a 
            onClick={handleLogout}
            className="nav-link"
            >
                 התנתק
            </a>
     );
}

export default  Logout;