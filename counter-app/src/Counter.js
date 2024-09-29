// src/Counter.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Counter.css'; // Import the CSS file for custom styles

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light-purple">
            <div className="text-center p-5 bg-light rounded shadow">
                <h1 className="mb-4">Counter Application</h1>
                <h2 className="display-4">{count}</h2>
                <div className="mt-3">
                    <button className="btn btn-success mx-2 hover-effect" onClick={increment}>
                        Increment
                    </button>
                    <button className="btn btn-danger mx-2 hover-effect" onClick={decrement}>
                        Decrement
                    </button>
                </div>
                <div className="mt-4">
                    <button className="btn btn-secondary hover-effect" onClick={() => setCount(0)}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
