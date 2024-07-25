/* eslint-disable react/prop-types */
import './card.styles.css';

export default function Card({ character, getRandomItems, results, setScores, scores, clickedIDs}) {

  function handleClick() {
    if (clickedIDs.current.includes(character.id)) {
      clickedIDs.current = [];
      navigator.vibrate(200)
      console.log("you failed")
      if (scores.bestScore > scores.currentScore)
        setScores.setCurrentScore(0)
      else {
        setScores.setBestScore(scores.currentScore)
        setScores.setCurrentScore(0)
      }
    } else {
      clickedIDs.current.push(character.id)
      setScores.setCurrentScore(scores.currentScore + 1)
      getRandomItems(results)
    }
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <img alt="character image" src={character.image} width={"auto"} />
      <h2> {character.name}</h2>
      <p>Species: {character.species}</p>
    </div>
  )
}