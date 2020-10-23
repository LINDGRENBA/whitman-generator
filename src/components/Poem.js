import React, { useState } from 'react';
import PoemButton from './PoemButton';

const Poem = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [titles, setTitles] = useState([]);
  const [poems, setPoems] = useState([]);

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
    marginTop: '2rem'
  }

  function buttonClick(){
    const success = document.querySelector('#successfulCall');
    success.textContent = "Hello there";

    // fetch()
  }

  return (
    <React.Fragment>
      <div style={poemBoxStyles}>
        <PoemButton buttonClick={buttonClick}/>
        <div style={poemStyles}>
          <h1 id="poemTitle">Poem Here</h1>
          <p id="successfulCall"></p>
        </div>
        <div id="call-failed">

        </div>
      </div>
    </React.Fragment>
  )
}

export default Poem;
