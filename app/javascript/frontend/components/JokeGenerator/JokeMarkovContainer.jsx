import React, { Component } from 'react';

import JokeMarkovView from './JokeMarkovView';

export default class JokeMarkovContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      updateJoke,
    } = this.props;
    
    return (
      <JokeMarkovView 
        updateJoke={ updateJoke }
      />
    );
  }
}