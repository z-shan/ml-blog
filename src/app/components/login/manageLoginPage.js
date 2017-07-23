'use strict';

var React = require('react');
var Router = require('react-router');
var LoginPage = require('./loginPage');

var ManageLoginPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function () {
        return {
            selectedOption: 'signin',
            auth: {email: null, password: null},
            register: {name: '', email: '', password: '', repeatpassword: ''}
        };
    },

    handleOptionChange: function(changeEvent) {
        console.log(changeEvent);
        this.setState({selectedOption: changeEvent});
    },

    setAuthState: function(event) {
        var field = event.target.name;
        var value = event.target.valaue;
        this.state.auth[field] = value;
        return this.setState({auth: this.state.auth});
    },

    setRegisterState: function(event) {
        var field = event.target.name;
        var value = event.target.valaue;
        this.state.register[field] = value;
        return this.setState({register: this.state.register});
    },

    authenticate: function(event) {
        event.preventDefault();
        //AuthorApi.saveAuthor(this.state.author);
        
        this.transitionTo('home'); // transition to home after login
    },

    render: function() {
        return (
            <LoginPage 
                handleOptionChange={this.handleOptionChange}
                setAuthState={this.setAuthState}
                setRegisterState={this.setRegisterState}
                selectedOption={this.state.selectedOption}
                auth={this.state.auth}
                register={this.state.register} />
        );
    }
});

module.exports = ManageLoginPage;
