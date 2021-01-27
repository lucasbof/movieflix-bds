import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/NavBar';
import history from './core/utils/history';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import PrivateRoute from 'core/components/Routes/PrivateRoute';

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <PrivateRoute path="/movies">
                <Movies />
            </PrivateRoute>
        </Switch>
    </Router>
);

export default Routes;
