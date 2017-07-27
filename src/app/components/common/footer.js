"use strict";

var React = require('react');

var Footer = React.createClass({
    render: function() {
		return (
            <div className="footer">
                <div className="container">
                    <div className="footer-text">
                        <p>© 2017 Magic Leap </p>
                    </div>
                </div>
            </div>
		);
	}
});

module.exports = Footer;
