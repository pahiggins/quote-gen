import React from 'react';

const Quote = ({ quote }) => {
  return (
    <main>
      <p>"{quote.text}"</p>
      <p>{quote.author}</p>
    </main>

  );
};

export default Quote;