import React, { useState } from 'react';

import './App.css';
// import StyledHeader from './components/Header';
import Header from './blocks/Header';
// import QuoteGen from './components/QuoteGen';
// import Quote from './components/Quote';
import quotes from './data/quotes.json';

// class App extends Component {
//   state = {
//     quoteIndex: 0,
//     generatingQuotes: false,
//   };

//   changeQuote = () => {
//     this.setState({
//       quoteIndex: Math.floor(Math.random() * quotes.length),
//     });
//   };

//   generateQuote = () => {
//     setInterval(this.changeQuote, 2000);
//     this.setState({ generatingQuotes: true });
//   };

//   render() {
//     const { quoteIndex, generatingQuotes } = this.state;
//     const selectedQuote = quotes[quoteIndex];

//     return (
//       <div className="App">
//         <StyledHeader />
//         <QuoteGen onClick={this.changeQuote} text='Quote me...' />
//         <QuoteGen onClick={this.generateQuote} disabled={generatingQuotes} text='Generate' />
//         <Quote quote={selectedQuote} />
//       </div>
//     );
//   }
// }

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [generatingQuotes, setGeneratingQuotes] = useState(false);
  const selectedQuote = quotes[quoteIndex];

  function changeQuote() {
    setQuoteIndex(Math.floor(Math.random() * quotes.length));
  }

  function generateQuote() {
    setInterval(changeQuote, 2000);
    setGeneratingQuotes(true);
  }

  return (
    <div className="App">
      <Header>
        <Header.Title>
          Quote Generator
        </Header.Title>
      </Header>
      {/* <QuoteGen onClick={changeQuote} text='Quote me...' />
      <QuoteGen onClick={generateQuote} disabled={generatingQuotes} text='Generate' />
      <Quote quote={selectedQuote} /> */}
    </div>
  );
}

export default App;
