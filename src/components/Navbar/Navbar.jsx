

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [line, setLine] = useState(() => {
        return localStorage.getItem('navbarLine') || "Home";
    });

    const navigate = useNavigate(); 

    const handleLogout = () => {
        
        localStorage.removeItem('isAuthenticated'); 
        localStorage.removeItem('navbarLine'); 
        navigate('/');
    };

    useEffect(() => {
        localStorage.setItem('navbarLine', line);
    }, [line]);

    return (
        <div className='navbar'>
            <div className="navbar-l">
                <img src="/love.png" alt="" className='logo' />
                <h1>Skyfull of Love</h1>
            </div>
            <ul>
                <li onClick={() => setLine('Home')} className={line === 'Home' ? 'active' : ''}>
                    <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}> Home</Link>
                </li>
                <li onClick={() => setLine('About')} className={line === 'About' ? 'active' : ''}>
                    <Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
                </li>
                <li onClick={() => setLine('Contact-us')} className={line === 'Contact-us' ? 'active' : ''}>
                    <Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>Contact-us</Link>
                </li>
                <li onClick={() => setLine('Donate')} className={line === 'Donate' ? 'active' : ''}>
                    <Link to='/donate' style={{ textDecoration: 'none', color: 'inherit' }}>Donate ❤️</Link>
                </li>
            </ul>
            <div className="navbar-r">
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    );
}

export default Navbar;
