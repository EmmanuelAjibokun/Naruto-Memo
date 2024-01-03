/* eslint-disable react/prop-types */
import './card.styles.css';

export default function Card({ character, getRandomItems, akatsuki}) {
  function handleClick() {
    getRandomItems(akatsuki)
    console.log("clicked")
  }

  return (
    <div className="card-container" onClick={handleClick}>
      {character.name}
      {/* <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} /> */}
      {/* <h2> {props.monster.name}</h2>
      <p> {props.monster.email}</p> */}
    </div>
  )
}