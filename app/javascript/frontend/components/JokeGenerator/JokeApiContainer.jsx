import React, { Component } from 'react';

import JokeApiView from './JokeApiView';

export default class JokeApiContainer extends Component {
  constructor(props) {
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