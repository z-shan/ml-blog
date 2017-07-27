'use strict';

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/blog/ManageBlog')}>
        <DefaultRoute handler={require('./components/blog/ManageBlog')} />
        <Route name="login" handler={require('./components/login/ManageLoginPage')} />
        <Route name="about" handler={require('./components/common/header')} />
        <Route name="home" handler={require('./components/common/header')} />
        <Route name="gallery" handler={require('./components/common/header')} />
        <NotFoundRoute handler={require('./components/notFoundPage')} />
    </Route>
);

module.exports = routes;