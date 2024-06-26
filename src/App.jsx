import { useRef, useEffect, useState } from 'react'
import { CardList } from './components/card-list/CardList';
import './App.css'
import ScoreBoard from './components/score/ScoreBoard';

function App() {
  const [characters, setCharacters] = useState({});
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [error, setError] = useState(null);

  // scoreboard 
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const clickedIDs = useRef([])

  const firstRender = useRef(true);
  const reset = false;

  useEffect(() => {
    console.log("load effect")
    if (characters != undefined) {
      fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => {
        setCharacters(data)
      })
      .catch(error => {
        setError(error.message); // Update error state with error message
      });
    }
  }, [reset])

  console.log(characters.results)

  return (
    <>
      <h1>NarutoMemo</h1>
      <ScoreBoard scores={{currentScore, bestScore}} setScores={{setCurrentScore, setBestScore}} clickedIDs={clickedIDs} />
      <div className="card">
        {characters.results != undefined ? <CardList results={characters.results} firstRender={firstRender} selectedIndexes={selectedIndexes} setSelectedIndexes={setSelectedIndexes} setScores={{setCurrentScore, setBestScore}} scores={{currentScore, bestScore}} clickedIDs={clickedIDs} /> : console.log("empty")}
        {error && <p>Error: {error}</p>}
      </div>
    </>
  )
}

export default App
