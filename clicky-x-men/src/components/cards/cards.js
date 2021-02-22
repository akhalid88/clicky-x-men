import React from "react";
import "./cards.css";

function Card(props) {
	console.log(props);
	return (
		<div className="card">
			<div className="img-container">
				<img src={props.image} />
				<span onClick={() => props.selectImage(props.id)}></span>
			</div>
		</div>
	)
}

export default Card;