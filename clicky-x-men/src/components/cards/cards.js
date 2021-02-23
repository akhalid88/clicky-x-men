import React from "react";
import "./cards.css";

function Card(props) {
	return (
		<div className={`card click-item animate__animated ${props.animate}`} onClick={() => props.selectCard(props.id)}>
			<img className="imgCard" src={props.image} />
		</div>
	)
}

// animate__shakeX

// animate__bounce

// {`${props.animate} ? "animate__shakeX" : ""`}
export default Card;