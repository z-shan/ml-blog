'use strict';

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/blog/manageBlogPage')} />
        <Route name="login" handler={require('./components/login/manageLoginPage')} />
        <Route name="about" handler={require('./components/common/header')} />
        <Route name="home" handler={require('./components/blog/ManageBlogPage')} />
        <Route name="blogpost" path="home/:id" handler={require('./components/blog/blogPost')} />
        <Route name="gallery" handler={require('./components/common/header')} />
        <Route name="post" handler={require('./components/blog/newBlog')} />
        <Route name="managePost" path="post/:id" handler={require('./components/blog/newBlog')} />
        <NotFoundRoute handler={require('./components/notFoundPage')} />
    </Route>
);

module.exports = routes;