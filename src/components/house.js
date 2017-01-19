import React, { PropTypes } from 'react';

export default function House(props) {
  return <div onClick={ props.selectHouse }>{props.name}</div>
}

House.propTypes = {
  name: PropTypes.string.isRequired,
};
