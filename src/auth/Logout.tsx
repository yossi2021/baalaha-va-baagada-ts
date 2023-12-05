import { useContext } from "react";
import { AppContext } from "../App";
import { NavLink } from "react-router-dom";


function  Logout() {
        const context = useContext(AppContext);
        if (!context) return <div>שגיאה</div>

    return ( 
          <>
            <NavLink 
                   onClick={(e) => context.handleLogout()}
                   className=" nav-link hover bg-gradient border border-white p-2" to="/Login"            >
                 התנתק
            </NavLink>
            
            </>
     );
}

export default  Logout;