'use strict';

var React = require('react');

var Input = React.createClass({
    render: function() {
        return (
            <div className="group">
                <label htmlFor={this.props.for} className="login-label">{this.props.label}</label>
                <input id={this.props.id} type="text" className="login-input" />
            </div>
        );
    }
});

module.exports = Input;