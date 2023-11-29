import { useState } from "react";
import Title from "../components/Title";
import Joi from "joi";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";




interface Props {
    handler: Function;
}

function Login({handler} : Props) {
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const [error, setError] = useState<string>('');

    function submit(){
        const schema = Joi.object().keys({
            email: Joi.string().required().min(6).max(255).email({ tlds:{
            allow: false}}),
            password: Joi.string().required().min(6).max(30)
        });

        const { error, value } = schema.validate({
            email,
            password
        });

        if (error) {
            // setError(error.message);
            console.log(error.message);
            return;
        }
        handler(value);

        toast.success('התחברות בוצעה בהצלחה');
    }

    

    return ( 
        <>
        <div className="p-2"></div>
        <div className="p-5 form-max-w m-auto" >
            <Title
                content="התחבר"
            />
            
            <div className="mb-3">
                <input 
                type="email" 
                className="form-control"
                placeholder="כתובת מייל"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
    `           
            </div>
            <div className="mb-3">
                <input 
                type="password" 
                className="form-control"
                placeholder="סיסמא"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
    `           
            </div>

            <button
            onClick={submit}
            className="btn btn-primary btn-lg">

                התחבר
            </button>
        </div>
        <div className="fixed-bottom">
        <Footer/>
        </div>
        </>
     );
}



export default Login;