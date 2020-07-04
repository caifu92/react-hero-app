import React from 'react';
import './ContentArea.sass';
import { HomeContent } from './HomeContent/HomeContent';
import { Route, Switch } from 'react-router-dom';
import { Dialogs } from './Dialogs/Dialogs';

export const ContentArea = () => {
    return (
        <div className="content-area">
            <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/dialogs" component={Dialogs} />
            </Switch>
        </div>
    );
}
