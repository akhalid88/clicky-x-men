import React, { Component } from "react";
import Wrapper from "./components/wrapper/wrapper";
import Navbar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
import Card from "./components/cards/cards";
import Footer from "./components/footer/footer";

import xmen from "./xmen.json";


class App extends Component {

	//state
	state = {
		xmen: xmen,
		selectedCards: [],
		currentScore: 0,
		maxScore: 0
	};

	componentDidMount() {
		this.shuffleCards();
	}

	// variables and functions
	shuffleCards = () => {
		const xmen = this.state.xmen.sort(() => Math.random() - 0.5);
		this.setState({ xmen: xmen });
	}

	selectCard = (id) => {



		for (var i = 0; i < this.state.selectedCards.length; i++) {
			if (id == this.state.selectedCards[i]) {
				//display failure
				//reload page
				console.log("Hello");
			} else {
				this.setState({ currentScore: this.state.currentScore + 1 })
				console.log("Score:" + this.state.currentScore);
			}
		}

		this.state.selectedCards.push(id);
		console.log("Image: " + this.state.selectedCards);
		this.shuffleCards();
	}


	//render
	render() {
		return (
			<Wrapper>
				<Navbar></Navbar>
				<Jumbotron></Jumbotron>
				<div className="container">
					{this.state.xmen.map(mutant => (
						<Card
							shuffleCards={this.shuffleCards}
							selectCard={this.selectCard}
							id={mutant.id}
							key={mutant.id}
							name={mutant.name}
							image={mutant.image}
						/>
					))}
				</div>
				<Footer></Footer>
			</Wrapper>
		);
	}
}

export default App;