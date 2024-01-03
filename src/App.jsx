import { useRef, useEffect, useState } from 'react'
import { CardList } from './components/card-list/CardList';
import './App.css'
import ScoreBoard from './components/score/ScoreBoard';

function App() {
  const [akatsukiMembers, setAkatsukiMembers] = useState({});
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  // scoreboard 
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const clickedIDs = useRef([])

  const firstRender = useRef(true);
  const reset = false;

  useEffect(() => {
    console.log("load effect")
    if (akatsukiMembers != undefined) {
      fetch("https://narutodb.xyz/api/akatsuki")
      .then(response => response.json())
      .then(data => {
        setAkatsukiMembers(data)
      })
    }
  }, [reset])

  console.log(akatsukiMembers.akatsuki)

  return (
    <>
      <h1>NarutoMemo</h1>
      <ScoreBoard scores={{currentScore, bestScore}} setScores={{setCurrentScore, setBestScore}} clickedIDs={clickedIDs} />
      <div className="card">
        {akatsukiMembers.akatsuki != undefined ? <CardList akatsuki={akatsukiMembers.akatsuki} firstRender={firstRender} selectedIndexes={selectedIndexes} setSelectedIndexes={setSelectedIndexes} setScores={{setCurrentScore, setBestScore}} scores={{currentScore, bestScore}} clickedIDs={clickedIDs} /> : console.log("empty")}
      </div>
    </>
  )
}

export default App
