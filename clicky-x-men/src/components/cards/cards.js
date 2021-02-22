import React from "react";
import "./cards.css";

function Card(props) {
	const imgStyles = {
		cardImage: {
			backgroundImage: {url:(props.image)}
		}
	}
	console.log(props);
	return (
		<div className="card click-item" style={imgStyles.cardImage} onClick={() => props.shuffleCards(props.id)}>
			{/* <div className="img-container"> */}
				<img src={props.image} />
				{/* <span onClick={() => props.selectCard(props.id)}></span> */}
			{/* </div> */}
		</div>
	)
}

export default Card;