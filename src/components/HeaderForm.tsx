import { useState } from "react";
import { StatusEnum } from "../App";
import Joi from "joi";

interface Props {
    addUser: Function;
}

function HeaderForm( { addUser }: Props) {
    const [name , setName] = useState('');   
    const [email , setEmail] = useState('');   
    const [status , setStatus] = useState(StatusEnum.active);
    const [error, setError] = useState<string>();

    const statusList = Object.values(StatusEnum);

    function clearFields(){
        setName('');
        setEmail('');
        setStatus(StatusEnum.active);
    }

    function handleClikcs(){
        // data validation
         const scheme = Joi.object().keys({
            name: Joi.string().required().min(2),
            email: Joi.string().required().email({tlds :{ allow: false}})
         });

         const { error } = scheme.validate({ name,email});
         
         if (error) {
            setError(error.message);
            return;
         }

         setError('');

         addUser({
            name,
            email,
            status
        });

        clearFields();
    }

     return ( 
        <>
        <div className="bg-light d-flex p-4 justify-content-between">
            <h5>משתמש</h5>
            <div className="d-flex">
                <input 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    className="form-control" 
                    type="text" 
                    placeholder="שם מלא" />

                    <input 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value )}
                    className="form-control mx-3" 
                    type="text"  
                    placeholder="כתובת מייל"/>

                    <select 
                    className="form-select"
                    value={status}
                    onChange={(e)=> setStatus(e.target.value as StatusEnum)}
                    >
                    {
                        statusList.map(status=>
                            <option 
                                key={status}
                                value={status}>
                                    {status}
                                </option>
                            )
                    }

                </select>

                <button 
                onClick ={handleClikcs}
                className="btn btn-info ms-3">הוסף</button>
            </div>
        </div>

             {
                error &&
                <div className="text=danger">
                {error}
                </div>
             }
       </>
        
     );
}

export default HeaderForm;