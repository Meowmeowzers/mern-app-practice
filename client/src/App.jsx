import './App.css'
import React from 'react';
import Entries from './components/Entries';

function App() {
  const [entries, setEntries] = React.useState([]);
  const connectionString = "http://localhost:4000/";

  React.useEffect(() => {
    fetch(connectionString)
      .then(res => res.json())
      .then(data => setEntries(data.data))
      .catch(e => console.error(e))
  }, []);

  return (
    <>
      {<Entries data={entries} />}
    </>
  )
}

export default App
