import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;