// import { useRef } from 'react';
import './card-list.style.css';
// import { Card } from '../card/Card';

// eslint-disable-next-line react/prop-types
export const CardList = ({akatsuki}) => {
  function getRandomItem(items) {
    const selectedIndexes = [];
    console.log(selectedIndexes.length)
    while (selectedIndexes.length != 10) {
      const randomIndex = Math.floor(Math.random() * items.length)
      if (!selectedIndexes.includes(randomIndex))
        selectedIndexes.push(randomIndex)
    }
    return selectedIndexes;
  }
  
  return (<div className="card-list">
    {console.log(getRandomItem(akatsuki))}
    {/* {akatsuki.map(member => (
      console.log(member)
      <Card key={monster.id} monster={monster}/>
    ))} */}
  </div>)
}