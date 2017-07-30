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
                                <Input for="email" label="Email Address" id="email" type="text" value={this.props.auth.email} onChange={this.props.setAuthState} />
                                <Input for="password" label="Password" id="password" type="password" value={this.props.auth.password} onChange={this.props.setAuthState} />
                                {this.props.loginerror ?
                                    <label className="login-error">Incorrect Username/Password</label> :
                                    <div></div>
                                }
                                <div className="hr"></div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign In" onClick={this.props.authenticate} />
                                </div>
                            </div>
                            <div className="sign-up-htm">
                                <Input for="name" label="Full Name" id="regname" type="text" value={this.props.register.name} onChange={this.props.setRegisterState} />
                                <Input for="email" label="Email Address" id="regemail" type="text" value={this.props.register.email} onChange={this.props.setRegisterState}/>
                                <Input for="password" label="Password" id="regpassword" type="password" value={this.props.register.password} onChange={this.props.setRegisterState}/>
                                <Input for="repeatpassword" label="Repeat Password" id="regrepeatpassword" type="password" value={this.props.register.repeatpassword} onChange={this.props.setRegisterState}/>
                                <Input for="interests" label="Interests (comma seperated)" id="interests" type="text" value={this.props.register.interests} onChange={this.props.setRegisterState}/>
                                
                                <div className="register-hr hr"></div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign Up" onClick={this.props.registerUser}/>
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
