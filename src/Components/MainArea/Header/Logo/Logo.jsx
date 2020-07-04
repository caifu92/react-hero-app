import React from 'react';
import './Logo.sass';
import { Link } from 'react-router-dom';


export const Logo = () => {
    return (
        <nav className="logo">
            <Link to="/" className="logo__link" />
        </nav>
    );
};