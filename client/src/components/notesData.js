const initialData =[
	{
		id: "1",
		title: "What is this?",
		details: "  This is a simple note taking web app made for the sake of learning ReactJS as a beginner. Its part of a ReactJS course but in the video a different library was used which made me lazy to do it. After weeks I decided to do the note app from scratch using my own solution and stock knowledge from the video.",
		complete: false
	},
	{
		id: "2",
		title: "Why a Notes App",
		details: "  A note app may be a repetitive beginner project but its a decent project.\n - A note taking app uses basic database operations(CRUD)\n - It looks simple for a beginner but it might get complicated without enough knowledge/experience especially when adding more features\n - A note app has clear objectives/functions",
		complete: false
	},
	{
		id: "3",
		title: "How it was made?",
		details: " - It was made using vannila JavaScript and the React library\n - I'll add more details next time",
		complete: false
	},
	{
		id: "4",
		title: "How to use?",
		details: " - The left panel lists the notes\n - The right panel shows the note details and some buttons\n - Clicking the lowest green colored button on the left panel list adds a new note\n - The two pink buttons on the right side allows you to save or clear the local notes data from local storage\n - Clicking a note from the left panel will show the delete button on the right panel\n - Clicking the delete button will delete the current selected note\n - You can click the title on the right side panel to rename the title",
		complete: false
	},
	{
		id: "5",
		title: "Other notes / Reflection",
		details: " - Your notes can be saved offline unless you clear you browser cache I think\n - When the notes list is empty it will load the default data next time you refresh the page\n - This looked better than I expected, I might add new features next time like read the notes like a markdown maybe using a library\n - I like the colors that I used on this app, I'll consider playing and using HSL colors more next time...\n - TBH I feel proud of this simple app, it might not look impressive to advance js/react developers, but the the though of finishing learning/creating something feels great...",
		complete: false
	}
]

export default initialData;
