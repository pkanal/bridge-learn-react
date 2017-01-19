import React, { PropTypes } from 'react';

import House from './house';

export default function Houses({
  houses,
  selectHouse,
  currentHouse,
}) {
  return (
    <div>
      <span style={{ color: 'red', fontSize: 30}}>Current House: { currentHouse }</span>
      {houses.map(house => <House name={ house.name } selectHouse={() => selectHouse(house.name)}/>)}
    </div>
  );
}

Houses.propTypes = {
  currentHouse: PropTypes.string,
  houses: PropTypes.array.isRequired,
  selectHouse: PropTypes.func.isRequired,
}
