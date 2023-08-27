import "./SignUp.scss";
import thiqaaLogo from "../../assets/thiqaa-logo.png";
import React, {FormEvent, useRef, useState} from "react";
import {useUserContext} from "../../Context/AuthContext.tsx"
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const formRef = useRef(null);
    const {signup, users} = useUserContext();
    const [formData, setFormData] = useState({
        id: users?.length ?? 0,
        studentName: '',
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const res = signup(formData);
        if(!res) {
            setError( "The enteredUser name was already selected please enter a valid userName");
        } else {
            setError( "");
            navigate("/classes")
        }
    }
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
                    onSubmit={handleSubmit}
                    ref={formRef}
                >
                    <label>
                <span>Student Full Name: </span>
                <input
                    type="text"
                    value={formData.studentName}
                    onChange={handleOnchange}
                    name="studentName"
                    required
                />
                    </label>
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
                            value={formData.password}
                            onChange={handleOnchange}
                            name="password"
                            required
                        />
                    </label>
                    {error && <div className="error">{error}</div>}
                    <button className="btn">Sign Up</button>
        </form>
                <div>
                    <span>Already a student?
                        <a href="/login">Login</a>
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Signup;