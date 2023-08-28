import React from 'react';

interface CardProps {
    image: string;
    name: string;
    clickHandler: () =>void
}

const Card: React.FC<CardProps> = ({ image, name, clickHandler }) => {
    return (
        <div
            onClick={clickHandler}
            style={{ maxWidth: '300px', border: '1px solid #ccc', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <img src={`./src/assets/${image}.jpeg`} alt={name} style={{ maxWidth: '100%', marginBottom: '8px' }} />
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{name}</p>
        </div>
    );
};

export default Card;