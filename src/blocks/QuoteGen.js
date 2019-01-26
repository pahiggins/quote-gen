import React from 'react';

const QuoteGen = ({ onClick, text, disabled }) => {
  return <button onClick={onClick} disabled={disabled} >{text}</button>;
};

export default QuoteGen;