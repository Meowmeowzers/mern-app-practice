import React from "react";

export default function NotesDetails(props){

	let text = props.data.find(item => item.id === props.selected ? {...item} : null);

	return(
		<div className="notes-details">
			{text && 
				<>
					<textarea
						id="note-title"
						name="note-title"
						value={!text ? "" : text.title}
						onChange={props.onTitleChange}
						className="notes-details-title"
					/>	
					
					<div className="notes-details-text">
						<textarea
							id="note-text" 
							name="note-text" 
							value={!text ? "" : text.details}
							onChange={props.onDetailsChange}
							className="notes-details-text-input"
						/>
					</div>
				</>
			}
					
			<div className="notes-details-options">
				<div 
					className="notes-details-options-db"
					onClick={props.onSaveLocalStorage}
				>
					SaveDB
				</div>
				<div 
					className="notes-details-options-db"
					onClick={props.onClearLocalStorage}
				>
					ClearDB
				</div>

				{text && 
						<div 
							className="notes-details-options-delete"
							onClick={() => props.onDelete(text.id)}
						>
							Delete
						</div>
				}		
			</div>
		</div>
	)
}