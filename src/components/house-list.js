import React from 'react';

import House from './house-info';

export default function HouseList({
  houses,
}) {
  return (
    <div>
      {houses.map(house => <House name={house.name} />)}
    </div>
  );
}
