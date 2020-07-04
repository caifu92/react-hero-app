import React from 'react';
import './Header.sass';
import { Logo } from './Logo/Logo';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className='col-lg-2'>
                        <Logo />
                    </div>
                </div>
            </div>
        </header>
    );
};