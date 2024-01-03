import { useRef, useEffect, useState } from 'react'
import { CardList } from './components/card-list/CardList';
import './App.css'
import ScoreBoard from './components/score/ScoreBoard';

function App() {
  const [akatsukiMembers, setAkatsukiMembers] = useState({});
  const [selectedIndexes, setSelectedIndexes] = useState([]);
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
      <h1>Vite + React</h1>
      <ScoreBoard />
      <div className="card">
        {akatsukiMembers.akatsuki != undefined ? <CardList akatsuki={akatsukiMembers.akatsuki} firstRender={firstRender} selectedIndexes={selectedIndexes} setSelectedIndexes={setSelectedIndexes} /> : console.log("empty")}
      </div>
    </>
  )
}

export default App
