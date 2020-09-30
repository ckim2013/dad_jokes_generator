import React,  { Component } from 'react';

import JokeDisplayView from './JokeDisplayView';

export default class JokeDisplayContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { joke } = this.props;
    
    return (
      <JokeDisplayView
        joke={ joke }
      />
    );
  }
}