import React, { useState, useEffect } from "react";
import "./App.css"; // Import external styling

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isBouncing, setIsBouncing] = useState(false);

    // Apply bouncing animation when threshold is reached
    useEffect(() => {
        if (count >= 10) {
            setIsBouncing(true);
            setTimeout(() => setIsBouncing(false), 500);
        }
    }, [count]);

    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <h2 className={`count ${isBouncing ? "bounce" : ""}`}>{count}</h2>
            <div className="button-container">
                <button className="increment" onClick={() => setCount(prevCount => prevCount + 1)}>Increase (+)</button>
                <button className="decrement" onClick={() => setCount(prevCount => Math.max(0, prevCount - 1))}>Decrease (-)</button>
            </div>
            
            {/* Threshold messages */}
            {count >= 10 && count < 15 && <p className="limit-message">🚀 You've reached the limit!</p>}
            {count >= 15 && <p className="limit-message">🔥 You’re really clicking away!</p>}
            
            {/* Reset button */}
            <button className="reset" onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default Counter;