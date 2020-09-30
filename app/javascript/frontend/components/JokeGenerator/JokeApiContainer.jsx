import React, { Component } from 'react';

import JokeApiView from './JokeApiView';

export default class JokeApiContainer extends Component {
  constructor(props) {
    console.log('inside!');
    super(props);
  }

  render() {
    const { 
      updateJoke
    } = this.props;

    return (
      <JokeApiView 
        updateJoke={ updateJoke }
      />
    );
  }
}