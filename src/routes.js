import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';

import MainPage from './pages/MainPage';
import PhotoDetail from './pages/PhotoDetail';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/photo/:photoId' component={PhotoDetail} />
            </Switch>
        </BrowserRouter>
    )
}