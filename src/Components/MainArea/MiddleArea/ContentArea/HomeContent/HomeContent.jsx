import React from 'react';
import './HomeContent.sass';
import { ContentTitle } from './ContentTitle/ContentTitle';
import HomeBaner from './HomeBaner/HomeBaner';

export const HomeContent = () => {
    return (
        <div className="home-area">
            <ContentTitle />
            <HomeBaner />
        </div>
    );
}