import React from "react"

function Term(props) {
	return (
        <div className="card question" key={props.word}>
            <h2 className="bold">
				Glossary Term:
			</h2>
			<br />
			<p>
				{props.question}
			</p>
			<br />
			<button aria-label="Get Definition" onClick={props.onClick}>Get Definition</button>
        </div>
	)
}

export default Term