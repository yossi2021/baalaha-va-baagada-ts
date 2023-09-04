import { verifyToken } from "./tokenMgmt";
import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

function RouetGuard({ children} : Props) {
    return verifyToken() ? ( 
        <>{children}</>
     ):  (
        <Navigate   
        replace={true}
        to="/login"
        />
     )
}

export default RouetGuard;