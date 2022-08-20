import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <NavLink className="nav-link" to="/dashboard"> Dashboard </NavLink>
            <NavLink className="nav-link" to="/create"> Add Album </NavLink>
        </header>
    );
};

export default Header;