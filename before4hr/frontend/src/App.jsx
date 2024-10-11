import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const jokesData = await fetch('http://localhost:3000/jokes');

    axios.get('/api/jokes').then((response) => {
      setJokes(response.data);
    });
  }

  if (jokes.length === 0) {
    return <h1>No Data Found</h1>
  }

  return (
    <>
      <h1>JOKES: {jokes.length}</h1>

      {jokes.map((element, index) => {
        return (
          <p key={index}>{element.joke}</p>
        )
      })}
    </>
  )
}

export default App
