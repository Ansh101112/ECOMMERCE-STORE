import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Spinner = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const countRef = useRef(count);
    const location = useLocation();

    useEffect(() => {
        countRef.current = count;
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => prevValue > 0 ? prevValue - 1 : 0);
        }, 1000);

        return () => {
            clearInterval(interval);
            if (countRef.current === 0) {
                // Redirect to the dashboard page with the location state
                navigate('/dashboard', {
                    state: { from: location.pathname }
                });
            }
        };
    }, [count, navigate, location]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="text-center">Redirecting you in {count} seconds</h1>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
