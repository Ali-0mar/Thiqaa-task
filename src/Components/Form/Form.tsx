import React, { FormEvent, ReactNode } from 'react';
import './Form.scss';
import thiqaaLogo from "../../assets/thiqaa-logo.png";

interface CustomForm {
    title: string;
    formData: Record<string, string>;
    handleSubmit: (e: FormEvent) => void;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
    children: ReactNode;
}

const CustomForm: React.FC<CustomForm> = (
    {
        title,
        //For patch value
        formData,
        handleSubmit,
        //For shared change events
        handleOnChange,
        error,
        children }
) => {
    return (
        <div className="form-container">
            <form className="form-up" onSubmit={handleSubmit}>
                <div className="logo">
                    <img  src={thiqaaLogo} alt=""/>
                </div>
                <h2 className="form-title">{title}</h2>
                {children}
                {error && <div className="error">{error}</div>}
                <button className="btn">{title}</button>
            </form>
        </div>
    );
};

export default CustomForm;
