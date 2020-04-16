import React from 'react';
import axios from 'axios';
import QuoteCard from './composants/QuoteCard'
import sampleQuote from './composants/SampleQuote'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: (sampleQuote)
    };
    this.getQuote = this.getQuote.bind(this)
  }
 
  getQuote(){    
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count={num}')
    .then(response => response.data)
    .then(data => { 
        console.log(data); 
     
     /*  console.log(data.map(quote =>
        console.log(quote) ||(
      <figure >
      <h3>{quote.character}</h3>
        <img src={quote.image} alt={quote.character} />
        <figcaption>
          <blockquote>{quote.quote}</blockquote>
        </figcaption>
      </figure>
      ))
      ) */

      this.setState({
        quote: data[0],
        
      });
    });
  }

  render() {
    //const simp = this.state.quote
    return(
      <div className="App">     
        <QuoteCard quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>
        Phrase suivante !
        </button>         
       </div> 
    )};


  }


export default App;
