import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FlashCards from "./FlashCards";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	
	render() {
		let gameElement = <FlashCards />

		return (
			<div className="main">
				<Header />
				<div className="mainContent">{gameElement}</div>
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));