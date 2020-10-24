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

  makeApiCall = () => {
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
      return "dude";
    })
    .catch((error) => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  buttonClick() {
    const success = document.querySelector('#successfulCall');
    // let result = this.makeApiCall(); 
    // console.log(result);

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
    const { error, isLoaded, poemTitles } = this.state;
    if(error){
      return <React.Fragment>Error: {error.message}</React.Fragment>
    } 
    
    // else if (!isLoaded) {
    //   return <React.Fragment>Loading...</React.Fragment>
    // } 
    
    else {
      return (
        <React.Fragment>
          <div style={poemBoxStyles}>
            <PoemButton buttonClick={this.buttonClick}/>
            <div style={poemStyles}>
              <h1 id="poemTitle">Poem Here {poemTitles[0]}</h1>
              <p id="successfulCall"></p>
            </div>
            <div id="call-failed">
  
            </div>
          </div>
        </React.Fragment>
      )
    }
  }

}

export default Poem;
