import React, { Component } from "react";
import Wrapper from "./components/wrapper/wrapper";
import Navbar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
// import Cards from "./components/cards/cards";
import Footer from "./components/footer/footer";
// import xmen from "./xmen.json";

class App extends Component {

	//state

	//functions

	//render
	render() {
		return (
			<Wrapper>
				<Navbar></Navbar>
				<Jumbotron></Jumbotron>
				{/* Card Logic */}
				<Footer></Footer>
			</Wrapper>
		);
	}
}

export default App;