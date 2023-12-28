import { useEffect, useState } from 'react'
import { CardList } from './components/card-list/CardList';
import './App.css'

function App() {
  const [akatsukiMembers, setAkatsukiMembers] = useState({});
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
      <div className="card">
        {akatsukiMembers.akatsuki != undefined ? <CardList akatsuki={akatsukiMembers.akatsuki} /> : console.log("empty")}
      </div>
    </>
  )
}

export default App
