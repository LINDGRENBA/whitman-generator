import React from 'react';


function GeneratePoemButton() {
  const buttonStyles = {
    backgroundColor: '#FFF',
    color: '#000',
    borderRadius: '2'
  }

  return (
    <button style={buttonStyles}>
      Generate New Poem
    </button>
  );
}

export default GeneratePoemButton;