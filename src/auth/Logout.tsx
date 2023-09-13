import { useContext } from "react";
import { AppContext } from "../App";
import Footer from "../components/Footer";

function  Logout() {
        const context = useContext(AppContext);
        if (!context) return <div>שגיאה</div>

    return ( 
          <>
            <button 
            onClick={(e) => context.handleLogout()}
            className="btn btn-link nav-link"
            >
                 התנתק
            </button>
            <Footer/>
            </>
     );
}

export default  Logout;