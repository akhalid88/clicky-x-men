import React from "react";
import "./jumbotron.css";

function Jumbotron() {
	return (
		<header className="header">
			<img src="assets/xmen.png"></img>
			<h1 className="title">Clicky X-Men</h1>
			<h2 className="instructions">Click on an image to initiate the mutation process and earn points, but don't click on a image more than once, or else...</h2>
		</header>
	)
}

export default Jumbotron;