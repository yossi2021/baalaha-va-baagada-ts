import { useContext } from "react";
import { AppContext } from "../App";


function  Logout() {
        const context = useContext(AppContext);
        if (!context) return <div>שגיאה</div>

    return ( 
          <>
            <button 
            onClick={(e) => context.handleLogout()}
            className="btn btn-link nav-link hover bg-warning"
            >
                 התנתק
            </button>
            
            </>
     );
}

export default  Logout;