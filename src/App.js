import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Trivia from './components/Trivia';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="trivia-container">
          <Header branding="Trivia App" />
          <div className="container trivia-content">
            <Switch>
              <Route exact path="/" component={Trivia} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
