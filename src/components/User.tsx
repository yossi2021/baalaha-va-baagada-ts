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
                        <span className=" text-light bg-primary px-2 rounded-pill p-1">
                            שלום רב- {context.userName}
                        </span>
                     )
             }   
        </>           
     );
}

export default User;