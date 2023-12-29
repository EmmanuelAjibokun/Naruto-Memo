// import { useRef } from 'react';
import './card-list.style.css';
import Card from '../card/Card';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const CardList = ({akatsuki, firstRender}) => {
  const [selectedIndexes, setSelectedIndexes] = useState([]);


  function getRandomItems(items) {
    firstRender.current = false;
    while (selectedIndexes.length != 10) {
      const randomIndex = Math.floor(Math.random() * items.length)
      if (!selectedIndexes.includes(randomIndex))
        selectedIndexes.push(randomIndex)
    }
    console.log(selectedIndexes)
    setSelectedIndexes(selectedIndexes);
    return(selectedIndexes)
  }
  
  return (<div className="card-list">
    {/* {console.log(getRandomItems(akatsuki))} */}
    {firstRender.current ? getRandomItems(akatsuki): null}
    {/* {console.log(akatsuki)} */}
    {selectedIndexes.map(index => (
      // eslint-disable-next-line react/prop-types
      akatsuki ? <Card key={akatsuki[index].id} character={akatsuki[index]} getRandomItems={getRandomItems} akatsuki={akatsuki} firstRender={firstRender} /> : null
    ))}
  </div>)
}