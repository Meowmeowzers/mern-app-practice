import React from "react";

export default function FetchTest(){
	const [text, setText] = React.useState();
	const link = "http://localhost:4000/";
  
	React.useEffect(()=>{
	  fetch(link)
		.then(res => res.json())
		.then(data => setText(data))
		.catch(error => {
			setText(error);
		});
	}, []);
  
	return (
		<pre>{text}</pre>
	)
}