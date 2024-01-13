import React from "react";
import EntryCard from "./EntryCard";

export default function Entries(props){
	const [entries, setEntries] = React.useState([]);
	const [shownEntries, setShownEntries] = React.useState([]);
	
	console.log(entries);

	React.useEffect(() => {
		setEntries(() => props.data);
		setShownEntries(() => entries.map((item, index) => {
			return(
				<EntryCard key={index} data={item}/>
			)
		}));
	}, [props]);


	return(
		<div className="entries-container">
			{shownEntries}
		</div>
	)
}