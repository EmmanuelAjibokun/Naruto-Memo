/* eslint-disable react/prop-types */
import './card.styles.css';

export default function Card({ character, getRandomItems, akatsuki, setScores, scores, clickedIDs}) {

  console.log(clickedIDs.current)
  function handleClick() {
    if (clickedIDs.current.includes(character.id)) {
      clickedIDs.current = [];
      if (scores.bestScore > scores.currentScore)
        setScores.setCurrentScore(0)
      else {
        setScores.setBestScore(scores.currentScore)
        setScores.setCurrentScore(0)
      }
    } else {
      clickedIDs.current.push(character.id)
      setScores.setCurrentScore(scores.currentScore + 1)
      console.log(character.id)
      getRandomItems(akatsuki)
      console.log("clicked")
    }
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <img alt="character" src={character.images[0]} />
      {character.name}
      {/* <h2> {props.monster.name}</h2>
      <p> {props.monster.email}</p> */}
    </div>
  )
}