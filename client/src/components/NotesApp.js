import React from "react";
import NotesList from "./NotesList";
import NotesDetails from "./NotesDetails";
import initialData from "./notesData";

const DEFAULT_SELECTED_ID = 0;

export default function NotesApp(){
	const [notesData, setNotesData] = React.useState([]);
	const [selectedId, setSelectedId] = React.useState(DEFAULT_SELECTED_ID);

	React.useEffect(() => {
		const loadedData = localStorage.getItem("localNotesData");
		const parsedData = JSON.parse(loadedData);

		// Im still not used to ternaries
		if (loadedData === null || parsedData.length === 0) {
			setNotesData(initialData);
			console.log("Loaded initial data...");
		}
		else{	
			setNotesData(parsedData);
			console.log("Loaded data from local storage...");
		}
	}, []);

	function handleDetailsChange(event){
		const note = notesData.map(item => {
			if(item.id === selectedId){
				return{
					...item,
					details: event.target.value
				}
			}
			else return item;
		});
		setNotesData(note);
	}

	function handleTitleChange(event){
		const note = notesData.map(item => {
			if(item.id === selectedId){
				return{
					...item,
					title: event.target.value
				}
			}
			else return item;
		});
		setNotesData(note);
	}

	function handleSelectClick(key){
		setSelectedId(key);
	}

	function addNote(){
		const randomNumber = Math.ceil(Math.random() * 1000000000000);
		const newNote =	{
			id: `${randomNumber}`,
			title: `New Note ${notesData.length + 1}`,
			details: "Edit here...",
			complete: false
		}
		setNotesData( prev => [...prev, newNote]);
		setSelectedId(newNote.id);
	}

	function deleteNote(key){
		if(key !== 0){
			setNotesData(prev => prev.filter(item => item.id !== key));
			setSelectedId(0);
		}
	}
	function saveLocalStorage(){
		let data = JSON.stringify(notesData);
		localStorage.setItem("localNotesData", data);
		console.log("Saved...");
		console.log(localStorage.getItem("localNotesData"))
	}
	function clearLocalStorage(){
		localStorage.clear("localNotesData");
		console.log("Cleared...");
	}

	return(
		<div className="notes-app-container">
			<h1 >Yet Another Simple Note App</h1>
			<div>
				<NotesList 
					data={notesData} 
					onClick={handleSelectClick} 
					addNote={addNote} 
				/>
				<NotesDetails 
					data={notesData}
					selected={selectedId} 
					onDetailsChange={handleDetailsChange} 
					onTitleChange={handleTitleChange}
					onSaveLocalStorage={saveLocalStorage}
					onClearLocalStorage={clearLocalStorage}
					onDelete={deleteNote}
				/>
			</div>
		</div>
	)
}