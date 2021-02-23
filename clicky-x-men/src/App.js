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
		topScore: 0,
		animate: '',
		guess: "Click an image to mutate!"
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
		if (this.state.selectedCards.indexOf(id) > -1) {
			// for (var i = 0; i < this.state.selectedCards.length; i++) {
			// if (id == this.state.selectedCards[i]) {
			//display failure
			//reload page
			console.log("You Lose to the Flatscans");
			// reset selectedCards and score
			this.setState({
				selectedCards: [],
				currentScore: 0,
				animate: "animate__wobble",
				guess: "You have failed miserably!"
			});
			// this.setState({ currentScore: 0 });
			// this.setState({ animate: "animate__headShake" })
		} else {
			//increase current score by 1
			this.setState({
				currentScore: this.state.currentScore + 1,
				guess: "You rock"
			})
			//if currentScore is higher than topScore, set topScore
			// console.log(this.state.currentScore);
			// console.log(this.state.topScore);
			if (this.state.currentScore >= this.state.topScore) {
				this.setState({ topScore: this.state.currentScore + 1 });
			}
			this.state.selectedCards.push(id);
			// console.log(this.state.selectedCards);
			// console.log("Score:" + this.state.currentScore);
		}
		this.shuffleCards();
	}

	//render
	render() {
		return (
			<Wrapper>
				<Navbar
					key={this.currentScore}
					currentScore={this.state.currentScore}
					topScore={this.state.topScore}
					guess={this.state.guess}
				/>
				<Jumbotron />
				<div className="container">
					{this.state.xmen.map(mutant => (
						<Card
							// shuffleCards={this.shuffleCards}
							selectCard={this.selectCard}
							id={mutant.id}
							key={mutant.id}
							name={mutant.name}
							image={mutant.image}
							animate={this.state.animate}
						/>
					))}
				</div>
				<Footer />
			</Wrapper>
		);
	}
}

export default App;