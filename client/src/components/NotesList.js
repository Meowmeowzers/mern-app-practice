import React from "react";

export default function NotesList(props){

	let noteslist = props.data.map(item => 
		<li key={item.id} onClick={()=>props.onClick(item.id)}>
			{item.title}
		</li>
	)

	return(
		<div className="notes-list">
			<ul>
				{noteslist}
				<li className="new-note-button" onClick={props.addNote}>+</li>
			</ul>
		</div>
	)
}