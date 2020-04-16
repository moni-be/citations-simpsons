import React from 'react';

function QuoteCard({quote}){
return (
    <figure className="QuoteCard">
    <h3>{quote.character}</h3>
      <img src={quote.image} alt={quote.character} />
      <figcaption>
        <blockquote>{quote.quote}</blockquote>
      </figcaption>
    </figure>
  );

}

export default QuoteCard