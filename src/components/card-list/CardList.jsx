/* eslint-disable react/prop-types */

import './card-list.style.css';
import Card from '../card/Card';
// import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const CardList = ({akatsuki, firstRender, selectedIndexes, setSelectedIndexes, setScores, scores, clickedIDs}) => {



  function getRandomItems(items) {
    firstRender.current = false;
    const newArr = []

    while (newArr.length != 10) {
      const randomIndex = Math.floor(Math.random() * items.length)
      if (!newArr.includes(randomIndex))
        newArr.push(randomIndex)
    }
    console.log("Previous: ", selectedIndexes)
    setSelectedIndexes(newArr);
    return(selectedIndexes)
  }
  
  return (<div className="card-list">
    {console.log(firstRender.current)}
    {firstRender.current ? getRandomItems(akatsuki): null}
    {selectedIndexes.map(index => (
      akatsuki ? <Card key={akatsuki[index].id} character={akatsuki[index]} getRandomItems={getRandomItems} akatsuki={akatsuki} firstRender={firstRender} setScores={setScores} scores={scores} clickedIDs={clickedIDs} /> : null
    ))}
    {console.log("current: ", selectedIndexes)}
  </div>)
}