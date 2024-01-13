export default function EntryCard(props){

	return(
		<div className="card">
			<p>{props.title}</p>
			<p>{props.content}</p>
			<p>{props.author}</p>
		</div>
	)
}