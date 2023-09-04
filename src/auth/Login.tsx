import { useState } from "react";
import Title from "../components/Title";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { setToken } from "./tokenMgmt";
import { postRequest } from "../services/apiService";


interface ILoginData{
    email: string;
    password: string;
}

function Login() {
    const navigate = useNavigate();
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
        login(value);
    }

    function login(data: ILoginData){
        const res = postRequest(
            'users/login',
            data,
            false
        );

        if (!res) return;
    
        res.then(response => response.json())
        .then(json => {
            setToken(json.token);
            localStorage.setItem('admin', json.isAdmin)
            localStorage.setItem('user', json.name)
            navigate('/books');
            
        })
}

    return ( 
        <>
        <div className="p-3 form-max-w m-auto" >
            <Title
                content="Login"
            />
            
            <div className="mb-3">
                <input 
                type="email" 
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
    `           
            </div>
            <div className="mb-3">
                <input 
                type="password" 
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
    `           
            </div>

            <button
            onClick={submit}
            className="btn btn-primary btn-lg">

                Login
            </button>
        </div>
        </>
     );
}



export default Login;