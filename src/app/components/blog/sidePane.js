"use strict";

var React = require('react');
var Link = require('react-router').Link;

var SidePane = React.createClass({

	render: function() {
		return (
			<div className="col-md-4 about-right heading">
                <div className="abt-1">
                    <div className="about-btn"><Link to="post">Post a Blog</Link></div>
                </div>
                <div className="abt-2">
                    <h3>YOU MIGHT ALSO LIKE</h3>
                        <div className="might-grid">
                            <div className="grid-might">
                                <a href="single.html"><img src="images/c-12.jpg" className="img-responsive" alt="" /></a>
                            </div>
                            <div className="might-top">
                                <h4><a href="single.html">Duis consectetur gravida</a></h4>
                                <p>Nullam non magna lobortis, faucibus erat eu, consequat justo. Suspendisse commodo nibh odio.</p> 
                            </div>
                            <div className="clearfix"></div>
                        </div>	
                        <div className="might-grid">
                            <div className="grid-might">
                                <a href="single.html"><img src="images/c-10.jpg" className="img-responsive" alt="" /></a>
                            </div>
                            <div className="might-top">
                                <h4><a href="single.html">Duis consectetur gravida</a></h4>
                                <p> Nullam non magna lobortis, faucibus erat eu, consequat justo. Suspendisse commodo nibh odio.</p> 
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="might-grid">
                            <div className="grid-might">
                                <a href="single.html"><img src="images/c-11.jpg" className="img-responsive" alt="" /></a>
                            </div>
                            <div className="might-top">
                                <h4><a href="single.html">Duis consectetur gravida</a></h4>
                                <p> Nullam non magna lobortis, faucibus erat eu, consequat justo. Suspendisse commodo nibh odio.</p> 
                            </div>
                            <div className="clearfix"></div>
                        </div>							
                </div>
                <div className="abt-2">
                    <h3>ARCHIVES</h3>
                    <ul>
                        <li><a href="single.html">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </a></li>
                        <li><a href="single.html">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</a></li>
                        <li><a href="single.html">When an unknown printer took a galley of type and scrambled it to make a type specimen book. </a> </li>
                        <li><a href="single.html">It has survived not only five centuries, but also the leap into electronic typesetting</a> </li>
                        <li><a href="single.html">Remaining essentially unchanged. It was popularised in the 1960s with the release of </a> </li>
                        <li><a href="single.html">Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing </a> </li>
                        <li><a href="single.html">Software like Aldus PageMaker including versionsof Lorem Ipsum.</a> </li>
                    </ul>
                </div>
            </div>
		);
	}
});

module.exports = SidePane;
