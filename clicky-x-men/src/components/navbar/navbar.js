import React from "react";
import "./navbar.css";

function Navbar() {
	return (
		<nav className="navbar sticky-top">

			{/* LIST */}
			<div className="container-fluid">
				<ul className="navbar-nav">
					<li>
						<a href="/">Clicky X-Men</a>
					</li>
					<li>Click an image to begin!</li>
					<li className="score">Score: <span className="currentScore">0</span> | Top Score: <span className="topScore">0</span></li>
				</ul>
			</div>

			{/* DIV */}
			{/* <div className="container-fluid">
				<div className="navbar-nav">
					<div>
						<a className="navItem" href="/">Clicky X-Men</a>
					</div>
					<div className="navItem">Click an image to begin the mutation process!</div>
					<div className="navItem"> Score: 0 | Top Score: 0</div>
				</div>
			</div> */}

		</nav>
	)
}

export default Navbar;