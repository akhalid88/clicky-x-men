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
			// reset selectedCards and score
			this.setState({
				selectedCards: [],
				currentScore: 0,
				animate: "animate__wobble",
				guess: "You have failed miserably!"
			});
		} else {
			//increase current score by 1
			this.setState({
				currentScore: this.state.currentScore + 1,
				guess: "Your x-gene is strong",
				animate: ''
			})

			if (this.state.currentScore >= this.state.topScore) {
				this.setState({ topScore: this.state.currentScore + 1 });
			}
			this.state.selectedCards.push(id);
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