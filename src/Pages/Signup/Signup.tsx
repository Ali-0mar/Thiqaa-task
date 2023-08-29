import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../Context/AuthContext.tsx';
import CustomForm from '../../Components/Form/Form';

const Signup: React.FC = () => {
    const { signup } = useUserContext();
    const [formData, setFormData] = useState({
        studentName: '',
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const res = signup(formData);
        if (!res) {
            setError('The entered username was already selected. Please enter a valid username.');
        } else {
            setError('');
            navigate('/classes');
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target?.name]: e.target?.value });
    };

    return (
        <div className="auth-page">
            <CustomForm title="Sign Up" formData={formData} handleSubmit={handleSubmit} handleOnChange={handleOnChange} error={error}>
                <label>
                    <span>Student Full Name: </span>
                    <input type="text" value={formData.studentName} onChange={handleOnChange} name="studentName" required />
                </label>
                <label>
                    <span>User name: </span>
                    <input type="text" required name="username" value={formData.username} onChange={handleOnChange} />
                </label>
                <label>
                    <span>Password: </span>
                    <input type="password" value={formData.password} onChange={handleOnChange} name="password" required />
                </label>
            </CustomForm >
            <div className='auth-mode'>
                <span>Already a student? <a href="/login">Login</a></span>
            </div>
        </div>
    );
};

export default Signup;
