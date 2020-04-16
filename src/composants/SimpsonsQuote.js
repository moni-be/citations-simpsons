import React from 'react';
import axios from 'axios';


class SimpsonsQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getQuote = () =>{
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.data)
    .then(data => {
      console.log(data); 
      this.setState({
        quote: data.results[0],
      });
    });
  }

  render() {
  
  }
}

export default SimpsonsQuotes;

/* class SimpsonsQuotes extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    };
  }

    getQuote = () =>{
      axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data); 
        this.setState({
          quote: data.results[0],
        });
      });
    }
  

  render() {
  return(
    <>
      </p>{this.state.quote} </p>
      <button type="button" onClick={this.getQuote}>
      Get employee
      </button>
    </>
  )};

}
 */

