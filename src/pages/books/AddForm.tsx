import { useState } from "react";

function AddForm() {
    const [date, setDate] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [price, setPrice] = useState<number>(1);
    const [error, setError] = useState<string>('');

    function handleClick(){
        
    }

    return ( 
        <>
        <div className="bg-light d-flex p-4 align-items-center">
        <input 
        value={location}
        onChange={(e) => setDate(e.target.value)}
        className="form-control"
         type="text"
         placeholder="Date"
          />
        <input 
        value={date}
        onChange={(e) => setLocation(e.target.value)}
        className="form-control"
         type="text"
         placeholder="location"
          />
        <input 
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        className="form-control"
         type="number"
         placeholder="Price"
          />
        

          <button onClick={handleClick}
          className="btn btn-info ms-3"
          >
            add
          </button>


    </div>

    
    {
            error &&
            <div className="text-danger">
                {error}
            </div>
          }
</>
     );
}

export default AddForm;