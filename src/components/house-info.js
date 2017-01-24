import React from 'react';

export default function HouseInfo({
  name,
  selectCurrentHouse,
}) {
  return <div onClick={ () => selectCurrentHouse(name) }>{name}</div>
}
