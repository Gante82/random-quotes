import React, {Component} from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteBox/>
      </div>
    );
  }
}

export default App;
