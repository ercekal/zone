import React from 'react';

const AverageVote = ({increment, decrement, number}) => {
  return (
    <div>
      Filter by average vote
      <div id='number'>{number}</div>
      <button onClick = {increment}> Increase </button>
      <button onClick = {decrement}> Decrese </button>
    </div>
  )
}

export default AverageVote;