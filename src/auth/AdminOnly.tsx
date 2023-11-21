import Footer from "../components/Footer";
import Title from "../components/Title";

function AdminOnly() {
    
    const admin = localStorage.getItem('admin')

    if (admin === "true") {
        return (
            <>
            <div className="p-2"></div>
            <div className="p-5">
            <Title content="מנהל יקר התחברת בהצלחה"/>
            </div>
            <h5 className="text-center">
                אם כבר התחברת אז תתחיל לנהל שיהיה המון בהצלחה
            </h5>
            <div className="fixed-bottom">
        <Footer/>
        </div>
            </>
        )
    } 
    return ( 
        <>
        <div className="p-2"></div>
        <div className="p-5">
        <Title content=" אין גישה"/>
        </div>
        <h3 className="text-danger text-center ">
     עמוד זה למורשים בלבד !!!  הגישה נדחתה על ידי המערכת
        </h3>
        <div className="fixed-bottom">
        <Footer/>
        </div>
        </>
        
     );
}

export default AdminOnly;