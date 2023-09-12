function AdminOnly() {
    
    const admin = localStorage.getItem('admin')

    if (admin === "true") {
        return (
            <>
            <h3 className="text-center">
                הגעת לדף שמורשה רק למנהל
            </h3>
            <h5 className="text-center">
                מנהל יקר התחברת בהצלחה 
            </h5>
            </>
        )
    } 
    return ( 
        <div className="text-danger text-center">
            <h2 > אין גישה  </h2>
        </div>
        
     );
}

export default AdminOnly;