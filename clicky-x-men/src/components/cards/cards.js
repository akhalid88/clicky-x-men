import React from "react";
import "./cards.css";

function Card(props) {
	return (
		<div className={`card click-item animate__animated ${props.animate}`} onClick={() => props.selectCard(props.id)}>
			<img className="imgCard" src={props.image} alt={props.name}/>
		</div>
	)
}

export default Card;