import React from "react";
import "./cards.css";

function Card(props) {
	return (
		<div className="card click-item" onClick={() => props.selectCard(props.id)}>
			<img src={props.image} />
		</div>
	)
}

export default Card;