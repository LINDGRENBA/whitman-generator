import React, { useState } from 'react';
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
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      poemTitles: []
    };
  }

  // add functionality to fetch call to handle various error codes (e.g. 404)

  buttonClick = () => {
    const success = document.querySelector('#successfulCall');
    fetch("https://pafmon-walt-whitman-poems.p.rapidapi.com/poems/", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "pafmon-walt-whitman-poems.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
      }
    })
    .then(response => response.json())
    .then((jsonifiedResponse) => {
      this.setState({
        isLoaded: true,
        poemTitles: jsonifiedResponse[0]
      });
      success.textContent = "dude";
      console.log("dude");
    })
    .catch((error) => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }
  
  render() {
    const { error, isLoaded, poemTitles } = this.state;
    let p;
    if(error){
      p = `Error: {error.message}`;
    } else if (!isLoaded) {
      p = "Not yet...";
    } else {
      p = "Hello";
    }
    // console.log(poemTitles);
    return (
      <React.Fragment>
        <div style={poemBoxStyles}>
          <PoemButton buttonClick={this.buttonClick}/>
          <div style={poemStyles}>
            <h1 id="poemTitle">Poem Here</h1>
            <p id="successfulCall">{p}</p>
          </div>
          <div id="call-failed">

          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default Poem;
