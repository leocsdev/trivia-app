import React, { Component } from 'react';
import axios from 'axios';

class Trivia extends Component {
  state = {
    trivia: []
  };

  async componentDidMount() {
    const res = await axios.get(
      'https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple'
    );
    this.setState({ trivia: res.data.results[0] });
    // console.log(this.state.trivia);
  }

  onClickHandler = async e => {
    e.preventDefault();
    const res = await axios.get(
      'https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple'
    );
    this.setState({ trivia: res.data.results[0] });
    // console.log(this.state.trivia);
  };

  render() {
    const { category, question, correct_answer } = this.state.trivia;
    return !category && !question && !correct_answer ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <p>
          <strong>{category}</strong>
        </p>
        <p>
          <strong>QUESTION:</strong> {question}
        </p>
        <p>
          <strong>ANSWER:</strong> {correct_answer}
        </p>
        <br />
        <button onClick={this.onClickHandler} className="btn btn-primary">
          Next Trivia
        </button>
      </div>
    );
  }
}

export default Trivia;
