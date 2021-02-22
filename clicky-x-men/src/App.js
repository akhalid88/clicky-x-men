import React, { Component } from "react";
import Wrapper from "./components/wrapper/wrapper";
import Navbar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
import Cards from "./components/cards/cards";
import Footer from "./components/footer/footer";
import xmen from "./xmen.json";
import Card from "./components/cards/cards";

class App extends Component {

	//state
	state = {
		xmen: xmen,
		playDeck: []
	};

	// variables and functions
	shuffleCards = () => {

		const xmen = this.state.xmen.sort(() => Math.random() - 0.5);
		this.setState({ xmen: xmen });
		// console.log(this.state.playDeck);
	}

	selectCard = id => {
		console.log(id);
	}

	//render
	render() {
		// this.shuffleCards();
		return (
			<Wrapper>
				<Navbar></Navbar>
				<Jumbotron></Jumbotron>
				<div className="container">
					{this.state.xmen.map(mutant => (
						<Card
							shuffleCards={this.shuffleCards}
							id={mutant.id}
							key={mutant.id}
							name={mutant.name}
							image={mutant.imageWeb}
						/>
					))}
				</div>
				{/* <Card></Card> */}
				<Footer></Footer>
			</Wrapper>
		);
	}
}

export default App;