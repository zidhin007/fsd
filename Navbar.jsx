import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [hover, setHover] = useState(false);

    return (
        <nav 
            className="navbar" 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ 
                backgroundImage: hover ? 'url(/path-to-your-hover-image.jpg)' : 'url(/path-to-your-default-image.jpg)',
            }}
        >
            <img src="/pic7.png" alt="Logo" className="navbar-logo" />
            <div>
                <h1 className="navbar-title">The Art Cart</h1>
                <p className="navbar-slogan">Your Art Journey Begins Here</p>
            </div>
            <button className="login-button">
            <Link to={"/sign in"} style={{ color: 'black',textDecoration: 'none', 
                        fontWeight: 'bold'  }}>LOGIN</Link>
            </button>
            <button className="signin-button">
            <Link to={"/login"} style={{ color: 'black',textDecoration: 'none', 
                        fontWeight: 'bold'  }}>SIGN UP</Link>
            </button>
        </nav>
    );
}

export default Navbar;
