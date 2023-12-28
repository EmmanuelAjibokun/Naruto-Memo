import './card-list.style.css';
// import { Card } from '../card/Card';

// eslint-disable-next-line react/prop-types
export const CardList = ({akatsuki}) => {
  function getRandomItem(items) {
    const randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex];
  }
  return (<div className="card-list">
    {console.log(getRandomItem(akatsuki))}
    {console.log(akatsuki)}
    {/* {akatsuki.map(member => (
      console.log(member)
      <Card key={monster.id} monster={monster}/>
    ))} */}
  </div>)
}