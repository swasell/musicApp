import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <div>
            <header className="header">
            <h1>Music App</h1>
            <hr></hr>
                <NavLink className="navLink" to="/"> Dashboard </NavLink>
                <NavLink className="navLink" to="/create"> Add Album </NavLink>
            </header>
        </div>
    );
};

export default Header;