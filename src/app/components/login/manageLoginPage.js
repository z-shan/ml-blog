'use strict';

var React = require('react');
var Router = require('react-router');
var LoginPage = require('./loginPage');
var AuthActions = require('../../actions/authActions');
var AuthStore = require('../../stores/authStore');
var helper = require('../../restHelper');
var toastr = require('toastr');

var ManageLoginPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function () {
        return {
            selectedOption: 'signin',
            auth: {email: '', password: ''},
            register: {name: '', email: '', password: '', repeatpassword: '', interests: ''},
            loginerror: false 
        };
    },

    handleOptionChange: function(changeEvent) {
        this.setState({selectedOption: changeEvent});
    },

    setAuthState: function(event) {
        this.state.auth[event.target.name] = event.currentTarget.value;
        return this.setState({auth: this.state.auth});
    },

    setRegisterState: function(event) {
        this.state.register[event.target.name] = event.currentTarget.value;
        return this.setState({register: this.state.register});
    },

    authenticate: function(event) {
        event.preventDefault();
        //AuthorApi.saveAuthor(this.state.author);
        //AuthActions.authenticate(this.state.auth.email, this.state.auth.password);
        //this.transitionTo('home'); // transition to home after login
        var control = this;
        helper.call('/api/user/authenticate', 'POST', {username: this.state.auth.email, password: this.state.auth.password})
            .then(function(data) {
                if(data.success) {
                    AuthActions.loginUser(data);
                    control.transitionTo('/');
                } else {
                    control.setState({loginerror: true});
                }
            });
    },

    registerUser: function(event) {
        event.preventDefault();

        var data = {
            name: this.state.register.name,
            email: this.state.register.email,
            password: this.state.register.password,
            interests: this.state.register.interests
        };

        var control = this;
        helper.call('/api/user/register', 'POST', data)
            .then(function(data) {
                if(data.success) {
                    toastr.success('Your are now registered. Please login now.');
                    control.setState({register: {name: '', email: '', password: '', repeatpassword: '', interests: ''}});
                } else {
                    toastr.error('Registration failed. Please try again - '+data.err);
                }
            }).catch(function(data) {
                toastr.error('Registration failed. Please try again - '+data.responseJSON.err);
            });
    },

    render: function() {
        return (
            <LoginPage 
                handleOptionChange={this.handleOptionChange}
                setAuthState={this.setAuthState}
                setRegisterState={this.setRegisterState}
                selectedOption={this.state.selectedOption}
                auth={this.state.auth}
                register={this.state.register} 
                authenticate={this.authenticate} 
                loginerror={this.state.loginerror} 
                registerUser={this.registerUser} />
        );
    }
});

module.exports = ManageLoginPage;
