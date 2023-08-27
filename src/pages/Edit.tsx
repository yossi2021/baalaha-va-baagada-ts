import Joi from "joi";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IBooks } from "./Books/Books";

function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [date, setDate] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [price, setPrice] = useState<number>(1);
    const [error, setError] = useState<string>('');

    useEffect(() =>{
        fetch(`http://localhost:3000/books/${id}`) 
                .then(response => response.json())
                .then(json => {
                    if (json.ok === false){
                        setError('error get the data')
                        return;
                    }
                    setDate(json.date)
                    setLocation(json.location)
                    setPrice(json.price)
                    
                    
            })
    }, [] );
    
    function handleClick(){
        const schema = Joi.object().keys({
            date: Joi.string().required().min(3),
            location: Joi.string().required().min(3),
            price: Joi.number().required().min(1)
        });

        const { error, value } = schema.validate({
            date,
            location,
            price
        });

        if (error) {
            setError(error.message);
            return;
        }

        setError('');
        editBook(value)
        
    }

    function editBook(book: IBooks){
            fetch(`http://localhost:3000/books/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(json => {
                if (json.error){
                setError(json.error)
                    return;
                }
                navigate('/books')

                
            })
}
    

    return ( 
        
        <>
        <div className="bg-light m-4">
            <div className="mb-3 ">
            <label 
                htmlFor="date" 
                className="form-label">
                    Date
            </label>
            
            <input 
                type="text" 
                readOnly={true} 
                className="form-control-plaintext" 
                id="date" 
                value={date}
                />
            
        </div>

        <div className="bg-light m-4">
        <label  
                className="form-label">
                Location
            </label>

        <input 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="form-control me-3"
         type="text"
         placeholder="location"
          />

        </div>

        <div className="bg-light m-4">
        <label  
                className="form-label">
                Price
            </label>
        <input 
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        className="form-control me-3"
         type="number"
         placeholder="Price"
          />

          </div>
        

          <button onClick={handleClick}
          className="btn btn-info ms-3"
          >
            Update
          </button>
          
          <Link 
          to="/books"
          className="btn btn-secondary"
          >
            Cancel
          </Link>


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

export default Edit;