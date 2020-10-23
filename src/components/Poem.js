import React from 'react';
import PoemButton from './PoemButton';

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

  function buttonClick(){
    console.log("Hello world");
  }

  return (
    <React.Fragment>
      <div style={poemBoxStyles}>
        <PoemButton buttonClick={buttonClick}/>
        <div id="successfulCall">
          <h1 style={poemStyles}>Poem Here</h1>
        </div>
        <div id="call-failed">

        </div>
      </div>
    </React.Fragment>
  )
}

export default Poem;
