import React, { useEffect, useState } from 'react';
import PoemButton from './PoemButton';

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
class Poem extends React.Component {

  buttonClick() {
    const success = document.querySelector('#successfulCall');
    
    // fetch("https://pafmon-walt-whitman-poems.p.rapidapi.com/poems/", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "pafmon-walt-whitman-poems.p.rapidapi.com",
    //     "x-rapidapi-key": "{process.env.API_KEY}"
    //   }
    // })
    // .then(response => {
    //   console.log(response.json);
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    success.textContent = "Hello there";
  }
  
  render() {
    return (
      <React.Fragment>
        <div style={poemBoxStyles}>
          <PoemButton buttonClick={this.buttonClick}/>
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

}

export default Poem;
