import React from 'react';
import { SiteBar } from './SiteBar/SiteBar';
import { ContentArea } from './ContentArea/ContentArea';


export const MiddleArea = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <SiteBar />
                </div>

                <div className="col-lg-9">
                    <ContentArea />
                </div>
            </div>
        </div>
    );
}