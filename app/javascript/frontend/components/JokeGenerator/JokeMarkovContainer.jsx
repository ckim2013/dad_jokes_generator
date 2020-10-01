import React, { Component } from 'react';

import JokeMarkovView from './JokeMarkovView';

export default class JokeMarkovContainer extends Component {
  constructor(props) {
    super(props);
    
    this.submitRequest = this.submitRequest.bind(this);
  }
  
  submitRequest() {
    this.props.updateJoke('Is Markov working?');
  }
  
  render() {
    return (
      <JokeMarkovView 
        submitRequest={ this.submitRequest }
      />
    );
  }
}