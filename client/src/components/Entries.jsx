import React from "react";

export default function Entries(props){
	const [entries, setEntries] = React.useState([]);
	const [shownEntries, setShownEntries] = React.useState([]);
	
	console.log(entries);

	React.useEffect(() => {
		setEntries(() => props.data);
		setShownEntries(() => entries.map((item, index) => {
			return(
				<div key={index} className="card">{item}</div>
			)
		}));
	}, [props]);


	return(
		<>
			<pre>{shownEntries}</pre>
		</>
	)
}