'use strict';

var React = require('react');

var Input = React.createClass({
    render: function() {
        return (
            <div className="group">
                <label htmlFor={this.props.for} className="label">{this.props.label}</label>
                <input id={this.props.id} type="text" className="input" />
            </div>
        );
    }
});

module.exports = Input;