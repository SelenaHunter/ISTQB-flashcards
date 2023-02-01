import React from "react"

function Answer(props) {
	return (
		<div className="card answer"> 
			<div>
				<h2 className="bold">Definition:</h2>
				<br />
				<p className="wordwrap">{props.answer}</p>
			</div>
			<br />
			<button aria-label="Next Term" onClick={props.onClick}>Next Term</button>
		</div>
	)
}

export default Answer