import React from "react";

export default function Entries(props){
	const [entries] = React.useState([1,2,3,4,5]);

	const shownEntries = entries.map((item, index) => {
		return(
			<p key={index}>
				{item}
			</p>
		)
	});

	return(
		<>
			<pre>{shownEntries}</pre>
			<p>Hello World</p>
		</>
	)
}