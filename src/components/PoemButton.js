import React from 'react';
import PropTypes from 'prop-types';


function PoemButton(props) {
  const buttonStyles = {
    backgroundColor: '#983295',
    color: '#FFF',
    borderRadius: '0.4rem',
    padding: '0.5rem',
    border: 'solid'
  }

  return (
    <button onClick={props.buttonClick} style={buttonStyles}>
      Generate New Poem
    </button>
  );
}

PoemButton.propTypes = {
  buttonClick: PropTypes.func
};

export default PoemButton;