import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../Context/AuthContext.tsx';
import CustomForm from '../../Components/Form/Form';
import "./Login.scss"
const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const { login } = useUserContext();
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const res = login(formData);
        if (res) {
            setError('');
            navigate('/classes');
        } else {
            setError('Incorrect Username or password');
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target?.name]: e.target?.value });
    };

    return (
        <div className="auth-page">
            <CustomForm title="Login" formData={formData} handleSubmit={handleSubmit} handleOnChange={handleOnChange} error={error}>
                <label>
                    <span>User name: </span>
                    <input type="text" required name="username" value={formData.username} onChange={handleOnChange} />
                </label>
                <label>
                    <span>Password: </span>
                    <input type="password" required name="password" value={formData.password} onChange={handleOnChange} />
                </label>
            </CustomForm>
            <div className="auth-mode">
                <span>New Here? <a href="/signup">Sign Up</a></span>
            </div>
        </div>
    );
};

export default Login;
