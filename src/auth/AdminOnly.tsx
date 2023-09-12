function AdminOnly() {
    
    const admin = localStorage.getItem('admin')

    if (admin === "true") {
        return (
            <h2 className="text-center">
                הגעת לדף שמורשה רק למנהל
            </h2>
        )
    } 
    return ( 
        <div className="text-danger text-center">
            <h2 > אין גישה  </h2>
        </div>
     );
}

export default AdminOnly;