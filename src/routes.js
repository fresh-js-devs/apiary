import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage.js';
import DetailPage from './pages/DetailPage.js';

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/country/:id' component={DetailPage}/>
            </Switch>
        </BrowserRouter>
    );
};