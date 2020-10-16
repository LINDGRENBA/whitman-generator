import React from 'react';
import GeneratePoemButton from './GeneratePoemButton';

function Poem() {
  const poemStyles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '2rem',
    minWidth: '10rem',
    minHeight: '15rem',
    backgroundColor: '#000',
    opacity: '0.75',
    color: '#FFF'
  }

  return (
    <div style={poemStyles}>
      <GeneratePoemButton />
    </div>
  )
}

export default Poem;

// display: block;
//   margin-left: auto;
//   margin-right: auto;
//   padding: 2rem;
//   min-width: 10rem;
//   min-height: 15rem;
//   background-color: #000;
//   opacity: 0.75;