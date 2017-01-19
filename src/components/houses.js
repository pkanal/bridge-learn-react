import React, { PropTypes } from 'react';

import House from './house';

export default function Houses({
  houses
}) {
  return (
    <div>
      {houses.map(house => <House name={ house.name } />)}
    </div>
  );
}

Houses.propTypes = {
  houses: PropTypes.array.isRequired,
}
