// import { useRef } from 'react';
import './card-list.style.css';
import Card from '../card/Card';

// eslint-disable-next-line react/prop-types
export const CardList = ({akatsuki}) => {
  const selectedIndexes = [];

  function getRandomItems(items) {
    while (selectedIndexes.length != 10) {
      const randomIndex = Math.floor(Math.random() * items.length)
      if (!selectedIndexes.includes(randomIndex))
        selectedIndexes.push(randomIndex)
    }
    return selectedIndexes;
  }
  
  return (<div className="card-list">
    {console.log(getRandomItems(akatsuki))}
    {/* {console.log(akatsuki)} */}
    {selectedIndexes.map(index => (
      // eslint-disable-next-line react/prop-types
      akatsuki ? <Card key={akatsuki[index].id} character={akatsuki[index]} getRandomItems={getRandomItems} akatsuki={akatsuki} /> : null
    ))}
  </div>)
}