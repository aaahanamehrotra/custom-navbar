import React from 'react'
import './test.css';

function Navbar(){
    return (
        <div className="nav">
            <h1>Test</h1>
            <div className="nav-links">
            <button className="nav-button">Home</button>
            <button className="nav-button">About</button>
            <button className="nav-button">Features</button>
            <button className="nav-button">Account</button>
            </div>
        </div>
    )
}

export default Navbar;