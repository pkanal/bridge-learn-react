import React from 'react';

import House from './house-info';

export default function HouseList({
  houses,
  selectCurrentHouse,
}) {
  return (
    <div>
      {houses.map((house, index) =>
        <House
          key={index}
          selectCurrentHouse={ selectCurrentHouse }
          name={house.name} />)
      }
    </div>
  );
}
