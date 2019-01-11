import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import QuoteGen from './components/QuoteGen';
import Quote from './components/Quote';
import quotes from './data/quotes.json';

class App extends Component {
  state = {
    quoteIndex: 0,
  };

  changeQuote = () => {
    this.setState({
      quoteIndex: Math.floor(Math.random() * quotes.length),
    });
  };

  render() {
    const { quoteIndex } = this.state;
    const selectedQuote = quotes[quoteIndex];

    return (
      <div className="App">
        <Header />
        <QuoteGen changeQuote={this.changeQuote} />
        <Quote quote={selectedQuote} />
      </div>
    );
  }
}

export default App;
