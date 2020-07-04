import React from 'react';
import './SiteBar.sass'
import { Link } from 'react-router-dom';

export const SiteBar = () => {
    return (
        <nav className="sitebar">
            <ul className="sitebar-list">
                <li className="sitebar-list__item">
                    <Link to="/" className="sitebar-list__link">
                        Home
                    </Link>
                </li>

                <li className="sitebar-list__item">
                    <Link to="/dialogs" className="sitebar-list__link">
                        Dialogs
                    </Link>
                </li>
            </ul>
        </nav>
    );
}