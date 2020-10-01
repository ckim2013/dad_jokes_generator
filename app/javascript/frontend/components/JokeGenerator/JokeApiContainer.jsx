import React, { Component } from 'react';

import JokeApiView from './JokeApiView';

export default class JokeApiContainer extends Component {
  constructor(props) {
    super(props);
    
    this.submitRequest = this.submitRequest.bind(this);
  }
  
  submitRequest() {
    this.props.updateJoke('Is API working?');
  };

  render() {
    return (
      <JokeApiView 
        submitRequest={ this.submitRequest }
      />
    );
  }
}