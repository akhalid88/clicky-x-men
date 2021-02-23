import React from "react";
import "./navbar.css";

function Navbar(props) {
	return (
		<nav className="navbar sticky-top">
			<div className="container-fluid">
				<ul className="navbar-nav">
					<li>
						<a href="/">Clicky X-Men</a>
					</li>
					<li>{props.guess}</li>
					<li className="score">Score: {props.currentScore} | Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;