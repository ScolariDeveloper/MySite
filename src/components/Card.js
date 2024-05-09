import React, { useState, useEffect, useRef } from 'react';
import './Card.css';
import { calculateShadowAndRotation } from '../utils/utils';

const lerp = (start, end, amount) => start + (end - start) * amount;

function Card({ title, par }) {
    const [shadowOffsetX, setShadowOffsetX] = useState(0);
    const [shadowOffsetY, setShadowOffsetY] = useState(0);
    const [shadowBlur, setShadowBlur] = useState(10);
    const [shadowOpacity, setShadowOpacity] = useState(0.2);
    const [rotateXValue, setRotateXValue] = useState(0);
    const [rotateYValue, setRotateYValue] = useState(0);

    const targetValues = useRef({
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 10,
        shadowOpacity: 0.2,
        rotateXValue: 0,
        rotateYValue: 0,
    });

    const damping = 0.1;

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const mouseX = e.nativeEvent.offsetX;
        const mouseY = e.nativeEvent.offsetY;

        const { shadowOffsetX, shadowOffsetY, shadowBlur, shadowOpacity, rotateXValue, rotateYValue } = calculateShadowAndRotation(mouseX, mouseY, cardWidth, cardHeight);

        targetValues.current = { shadowOffsetX, shadowOffsetY, shadowBlur, shadowOpacity, rotateXValue, rotateYValue };
    };

    const handleMouseLeave = () => {
        targetValues.current = {
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 10,
            shadowOpacity: 0.2,
            rotateXValue: 0,
            rotateYValue: 0,
        };
    };

    useEffect(() => {
        const animate = () => {
            setShadowOffsetX((prev) => lerp(prev, targetValues.current.shadowOffsetX, damping));
            setShadowOffsetY((prev) => lerp(prev, targetValues.current.shadowOffsetY, damping));
            setShadowBlur((prev) => lerp(prev, targetValues.current.shadowBlur, damping));
            setShadowOpacity((prev) => lerp(prev, targetValues.current.shadowOpacity, damping));
            setRotateXValue((prev) => lerp(prev, targetValues.current.rotateXValue, damping));
            setRotateYValue((prev) => lerp(prev, targetValues.current.rotateYValue, damping));

            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <div
            className="card"
            style={{
                transform: `perspective(1000px) rotateX(${rotateXValue}deg) rotateY(${rotateYValue}deg) skewX(-25deg)`,
                boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity})`,
                transition: `transform 0.3s ease`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-content">
                <h2>{title}</h2>
                <p>{par}</p>
            </div>
        </div>
    );
}

export default Card;
