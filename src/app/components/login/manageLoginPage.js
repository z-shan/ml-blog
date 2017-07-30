'use strict';

var React = require('react');
var Router = require('react-router');
var LoginPage = require('./loginPage');
var AuthActions = require('../../actions/authActions');
var AuthStore = require('../../stores/authStore');
var helper = require('../../restHelper');

var ManageLoginPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function () {
        return {
            selectedOption: 'signin',
            auth: {email: '', password: ''},
            register: {name: '', email: '', password: '', repeatpassword: ''},
            loginerror: false 
        };
    },

    handleOptionChange: function(changeEvent) {
        this.setState({selectedOption: changeEvent});
    },

    setAuthState: function(event) {
        //var field = event.target.name;
        //var value = event.target.valaue;
        //this.state.auth[field] = value;
        this.state.auth[event.target.name] = event.currentTarget.value;
        return this.setState({auth: this.state.auth});
    },

    setRegisterState: function(event) {
        //var field = event.target.name;
        //var value = event.currentTarget.value;
        //this.state.register[field] = value;
        this.state.register[event.target.name] = event.currentTarget.value;
        return this.setState({register: this.state.register});
    },

    authenticate: function(event) {
        event.preventDefault();
        //AuthorApi.saveAuthor(this.state.author);
        //AuthActions.authenticate(this.state.auth.email, this.state.auth.password);
        //this.transitionTo('home'); // transition to home after login
        var control = this;
        helper.post('/api/user/authenticate', {username: this.state.auth.email, password: this.state.auth.password})
            .then(function(data) {
                console.log(data);
                if(data.success) {
                    AuthActions.loginUser(data);
                    control.transitionTo('/');
                } else {
                    control.setState({loginerror: true});
                }
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
                loginerror={this.state.loginerror} />
        );
    }
});

module.exports = ManageLoginPage;
