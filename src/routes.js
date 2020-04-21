import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import MagicDetail from './pages/MagicDetail';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/magic/:magicId' component={MagicDetail} />
      </Switch>
    </BrowserRouter>
  );
};
