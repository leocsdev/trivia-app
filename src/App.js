import React, { Component } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Trivia from './components/Trivia';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello from App Component</h1>
        <Header />
        <Trivia />
        <Footer />
      </div>
    );
  }
}

export default App;
