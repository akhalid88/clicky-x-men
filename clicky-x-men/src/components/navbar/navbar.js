import React from "react";
import "./navbar.css";

function Navbar(props) {
	// console.log("Help");
	// console.log(props);
	return (
		<nav className="navbar sticky-top">
			<div className="container-fluid">
				<ul className="navbar-nav">
					<li>
						<a href="/">Clicky X-Men</a>
					</li>
					<li>Click an image to mutate!</li>
					<li className="score">Score: {props.currentScore} | Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;