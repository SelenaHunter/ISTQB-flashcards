
import React, {Component} from "react";
import Term from "./Term";
import Answer from "./Answer";
import GameOver from "./GameOver";
import { glossary } from "./FlashCardList";

class FlashCards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quizQuestions: this.questionList,
			answerIsVisible: false,
			currentCard: {},
			count: 0
		}
		this.handleClick = this.handleClick.bind(this)
		this.chooseRandomQuestions = this.chooseRandomQuestions.bind(this)
	}
	questionList = glossary

	componentDidMount() {
		// Once the FlashCards module is loaded, start the questions.
		this.chooseRandomQuestions()
	}
	
	chooseRandomQuestions() {
			const randomNumber = Math.floor(Math.random() * this.questionList.length);
			const randomQuestion = this.state.quizQuestions[randomNumber];
			this.setState(({currentCard: randomQuestion}))
	}
	
	handleClick() {
		// If the user clicks the card, switch the visibility boolean.
		this.setState(state => ({
			answerIsVisible: !state.answerIsVisible
		}))
		
		// If the user is already viewing the answer, pick a different question.
		if (this.state.answerIsVisible === true) {
			this.chooseRandomQuestions()
			this.setState(prevState => ({
				count: prevState.count + 1
			}))
		}
	}
	
	render() {
		// If the user has tried less than 10 questions.
		// if (this.state.count < 3) {
			// If the answer visibility flag is set to false, show the question.
			if (!this.state.answerIsVisible) {
				return (
					<div>
						<Answer 
							onClick={this.handleClick}
							question={this.state.currentCard.word}
							answer={this.state.currentCard.definition}
						/>
					</div>
				)
			} else {
				return (
					<div>
					<Term 
						onClick={this.handleClick}
						key={this.state.currentCard.word}
						question={this.state.currentCard.word}
						/>
				</div>
			)
		}
			// If the user has seen more than 10 questions, show the game over screen with an option to continue.
		// } else {
		// 	return (<GameOver onClick={() => {
		// 		this.setState({count:0})
		// 		this.chooseRandomQuestions();
		// 		}}
		// 	/>)
		// }
	}
}

export default FlashCards