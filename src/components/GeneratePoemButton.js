import React from 'react';


function GeneratePoemButton() {
  const buttonStyles = {
    backgroundColor: '#983295',
    color: '#FFF',
    borderRadius: '0.4rem',
    padding: '0.5rem',
    border: 'solid'
  }

  // onclick(){

  // }

  return (
    <button style={buttonStyles}>
      Generate New Poem
    </button>
  );
}

export default GeneratePoemButton;