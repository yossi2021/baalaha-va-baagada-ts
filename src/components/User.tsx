import { useContext } from "react";
import { AppContext } from "../App";

function User() {
    const context = useContext(AppContext);
        if (!context) return <div>Eroor</div>

    return ( 
        <>
            {
                (context.userName.length === 0) ?
                    null :
                    (
                        <div>
                            Hello {context.userName}
                        </div>
                     )
             }   
        </>           
     );
}

export default User;