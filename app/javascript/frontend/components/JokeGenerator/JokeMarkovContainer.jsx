import React, { Component } from 'react';
import axios from 'axios';

import JokeMarkovView from './JokeMarkovView';

export default class JokeMarkovContainer extends Component {
  constructor(props) {
    super(props);
    
    this.submitRequest = this.submitRequest.bind(this);
  }
  
  submitRequest() {
    const {
      updateJoke,
    } = this.props;
    
    axios.get('/jokes/send_markov_request')
      .then(res => {
        updateJoke(res.data.joke);
      });
  }
  
  render() {
    return (
      <JokeMarkovView 
        submitRequest={ this.submitRequest }
      />
    );
  }
}