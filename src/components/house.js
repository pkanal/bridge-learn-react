import React, { PropTypes } from 'react';

export default function House(props) {
  return <div>{props.name}</div>
}

House.propTypes = {
  name: PropTypes.string.isRequired,
};
