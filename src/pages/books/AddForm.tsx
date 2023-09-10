import Joi from "joi";
import { useState } from "react";
import { IBooks } from "./Books";
import { postRequest } from "../../services/apiService";

interface Props {
    addBooks: Function;
}

function AddForm({ addBooks }: Props ) {
    const [date, setDate] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [price, setPrice] = useState<number>(1);
    const [error, setError] = useState<string>('');

    function clearFields(){
        setDate('');
        setLocation('');
        setPrice(1);
    }

    
    
            function fetchBooks(value: IBooks){
                const res = postRequest(
                    'books/',
                    value
                );

            if (!res) return

                res.then(response => response.json())
                .then(json => {
                    addBooks(json)  
                })
    }


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
        clearFields();
        fetchBooks(value);
    }

    return ( 
        <>
        
        <div className="bg-light d-flex p-4 align-items-center ">
        <button onClick={handleClick}
          className="btn btn-info ms-3"
          >
            הוסף
          </button>
          
        <input 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="form-control me-3 text-center"
         type="text"
         placeholder="תאריך איסוף"
          />
        <input 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="form-control me-3 text-center"
         type="text"
         placeholder="הזן עיר"
          />
        <input 
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        className="form-control me-3 text-center"
         type="number"
         placeholder="כמות הספרים"
          />
        
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


