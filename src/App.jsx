import { useEffect, useRef, useState } from 'react'
import Card from './components/card/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const akatsukiMembers = useRef({})

  useEffect(() => {
    fetch("https://narutodb.xyz/api/akatsuki")
    .then(response => response.json())
    .then(data => akatsukiMembers.current = data)
  }, [])

  console.log(akatsukiMembers.current.akatsuki)


  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Card/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
