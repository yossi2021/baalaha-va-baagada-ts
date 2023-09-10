import { useContext } from "react";
import { AppContext } from "../App";

function User() {
    const context = useContext(AppContext);
        if (!context) return <div>שגיאה</div>

    return ( 
        <>
            {
                (context.userName.length === 0) ?
                    null :
                    (
                        <div>
                            שלום - {context.userName}
                        </div>
                     )
             }   
        </>           
     );
}

export default User;