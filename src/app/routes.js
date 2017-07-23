'use strict';

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/login/ManageLoginPage')}>
        <DefaultRoute handler={require('./components/login/ManageLoginPage')} />
        <Route name="shop" handler={require('./components/common/header')} />
        <Route name="about" handler={require('./components/common/header')} />
        <NotFoundRoute handler={require('./components/notFoundPage')} />
    </Route>
);

module.exports = routes;