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
                        <span className=" text-light mt-2 p-2" >
                            שלום רב - {context.userName}
                        </span>
                     )
             }   
        </>           
     );
}

export default User;