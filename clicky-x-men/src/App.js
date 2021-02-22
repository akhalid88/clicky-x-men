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
		xmen: xmen
	};

	functions
	selectImage = id => {
		alert("You clicked mutant Id #" + id);;
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
							id={mutant.id}
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