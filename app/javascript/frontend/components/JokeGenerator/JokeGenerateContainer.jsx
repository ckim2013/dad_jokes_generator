import React, { Component } from 'react';
import axios from 'axios';

import JokeGenerateView from './JokeGenerateView';

export default class JokeGenerateContainer extends Component {
  constructor(props) {
    super(props);
    
    this.submitRequest = this.submitRequest.bind(this);
  }
  
  submitRequest() {
    const {
      cueWord,
      updateJoke,
    } = this.props;
    
    axios.get(`/jokes/generate?cue_word=${ cueWord }`)
      .then(res => {
        updateJoke(res.data.joke);
      });
  }

  render() {
    return (
      <JokeGenerateView 
        submitRequest={ this.submitRequest }
      />
    );
  }
}