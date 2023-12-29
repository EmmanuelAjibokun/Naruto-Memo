/* eslint-disable react/prop-types */
import './card.styles.css';

export default function Card({ character, getRandomItems, akatsuki, firstRender }) {
  function handleClick() {
    firstRender.current = false;
    console.log(firstRender)
    getRandomItems(akatsuki)
    console.log("clicked")
    console.log(getRandomItems(akatsuki))
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