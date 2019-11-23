import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="display-4">About Trivia App</h1>
      <p className="lead">
        Simple app that uses{' '}
        <a
          href="https://opentdb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Trivia database API
        </a>
        .
      </p>
      <p className="text-secondary">Version 1.0</p>
    </div>
  );
};

export default About;
