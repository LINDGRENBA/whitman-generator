import React from 'react';


function GeneratePoemButton() {
  const buttonStyles = {
    backgroundColor: '#FFF',
    color: '#000',
    borderRadius: '0.4rem',
    padding: '0.5rem',
    border: 'solid'
  }

  return (
    <button style={buttonStyles}>
      Generate New Poem
    </button>
  );
}

export default GeneratePoemButton;