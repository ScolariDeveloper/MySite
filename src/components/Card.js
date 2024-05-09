import React from 'react';
import './Card.css';
function Card({ title, par }) {
    return (
        <div className="card">
            <div className="card-content">
                <h2>{title}</h2>
                <p>
                    {par}
                </p>
            </div>
        </div>
    );
}

export default Card;