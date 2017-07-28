'use strict';

var React = require('react');
var Input = require('../common/textInput');

var LoginPage = React.createClass({
    render: function() {
        return (
            <div className="login-wrapper">
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" checked={this.props.selectedOption === 'signin'} value="signin" /><label htmlFor="tab-1" className="tab" value="signin" onClick={this.props.handleOptionChange.bind(null, 'signin')} >Sign In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" checked={this.props.selectedOption === 'signup'} value="signup" /><label htmlFor="tab-2" className="tab" value="signup" onClick={this.props.handleOptionChange.bind(null, 'signup')} >Sign Up</label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <Input for="email" label="Email Address" id="email" value={this.props.auth.email} onChange={this.props.setAuthState}/>
                                <Input for="password" label="Password" id="password" value={this.props.auth.password} />

                                <div className="hr"></div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign In" />
                                </div>
                                
                            </div>
                            <div className="sign-up-htm">
                                <Input for="name" label="Full Name" id="regname" value={this.props.register.name} onChange={this.props.setRegisterState} />
                                <Input for="email" label="Email Address" id="regemail" value={this.props.register.name} onChange={this.props.setRegisterState}/>
                                <Input for="password" label="Password" id="regpassword" value={this.props.register.name} onChange={this.props.setRegisterState}/>
                                <Input for="repeatpassword" label="Repeat Password" id="regrepeatpassword" value={this.props.register.name} onChange={this.props.setRegisterState}/>
                                
                                <div className="hr"></div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign Up" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LoginPage;
