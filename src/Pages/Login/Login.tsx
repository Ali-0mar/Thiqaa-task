import thiqaaLogo from "../../assets/thiqaa-logo.png";
import "./Login.scss"
import {useNavigate} from "react-router-dom";
import React, {FormEvent, useRef, useState} from "react";
import {useUserContext} from "../../Context/AuthContext.tsx";
const Login = () => {

    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const {login} = useUserContext();
    const navigate = useNavigate();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const res = login(formData);
        console.log(res)
        if(res) {
            setError("");
            navigate("/classes")
        } else {
           setError("Incorrect Username or password")
        }
    };
    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target?.name]: e.target?.value });
    };
    return (
        <div className="signup-container">
            <div className="form-container">
                <div className="logo">
                    <img  src={thiqaaLogo} alt=""/>
                </div>
                <form
                    className="from-up"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <label>
                        <span>User name: </span>
                        <input
                            type="text"
                            required
                            name="username"
                            value={formData.username}
                            onChange={handleOnchange}
                        />
                    </label>
                    <label>
                        <span>Password: </span>
                        <input
                            type="password"
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleOnchange}
                        />
                    </label>
                    {error && <div className="error">{error}</div>}
                    <button className="btn">Login</button>
                </form>
                <div>
                    <span>New Here?
                        <a href="/signup">Sign Up</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;