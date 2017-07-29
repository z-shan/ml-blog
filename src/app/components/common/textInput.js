'use strict';

var React = require('react');

var Input = React.createClass({
    render: function() {
        return (
            <div className="group">
                <label htmlFor={this.props.for} className="login-label">{this.props.label}</label>
                <input name={this.props.for} ref={this.props.for} id={this.props.id} type={this.props.type} className="login-input" value={this.props.value} onChange={this.props.onChange} />
            </div>
        );
    }
});

module.exports = Input;