import { useContext } from "react";
import { AppContext } from "../App";

function  Logout() {
        const context = useContext(AppContext);
        if (!context) return <div>Eroor</div>

    return ( 
            <button 
            onClick={(e) => context.handleLogout()}
            className="btn btn-link nav-link"
            >
                 התנתק
            </button>
     );
}

export default  Logout;