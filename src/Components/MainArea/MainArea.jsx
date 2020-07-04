import React from 'react';
import { Header } from './Header/Header';
import { MiddleArea } from './MiddleArea/MiddleArea';

export const MainArea = () => {
    return (
        <React.Fragment>
            <Header />
            <MiddleArea />
        </React.Fragment>
    );
};