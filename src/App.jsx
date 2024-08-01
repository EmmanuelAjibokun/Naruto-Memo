/* eslint-disable react/no-unescaped-entities */

import { useRef, useEffect, useState } from 'react'
import { CardList } from './components/card-list/CardList';
import './App.css'
import ScoreBoard from './components/score/ScoreBoard';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [characters, setCharacters] = useState({});
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [error, setError] = useState(null);

  // scoreboard 
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [newBestScore, setNewBestScore] = useState(false)

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

  useEffect(() => {
    setTimeout(()=>setNewBestScore(false), 3000);
  }, [newBestScore])

  console.log(characters.results)

  return (
    <div className='app'>
      <ParticlesBackground setNewBestScore={setNewBestScore} newBestScore={newBestScore} />
      <div className='content'>
        <div className='header'>
          <h1 className='h1'>Rick'N'MortyMemo</h1>
          <ScoreBoard scores={{currentScore, bestScore}} setScores={{setCurrentScore, setBestScore}} clickedIDs={clickedIDs} />
        </div>
        <div className="card">
          {characters.results != undefined ? <CardList results={characters.results} firstRender={firstRender} selectedIndexes={selectedIndexes} setSelectedIndexes={setSelectedIndexes} setScores={{setCurrentScore, setBestScore}} scores={{currentScore, bestScore}} clickedIDs={clickedIDs} setNewBestScore={setNewBestScore} /> : console.log("empty")}
          {error && <p>Error: {error}</p>}
        </div>
      </div>
    </div>
  )
}

export default App
