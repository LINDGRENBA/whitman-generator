import React from 'react';
import GeneratePoemButton from './GeneratePoemButton';

function Poem() {
  const poemBoxStyles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '2rem',
    minWidth: '10rem',
    minHeight: '15rem',
    backgroundColor: '#000',
    opacity: '0.85',
    color: '#FFF'
  }

  const poemStyles = {
    border: '2px solid #FFF',
    textAlign: 'center',
  }

  return (
    <React.Fragment>
      <div style={poemBoxStyles}>
        <GeneratePoemButton />
        <div >
          <h1 style={poemStyles}>Poem Here</h1>
        </div>
      </div>
    </React.Fragment>
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