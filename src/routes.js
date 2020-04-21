import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage.js';

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage}/>
            </Switch>
        </BrowserRouter>
    );
};