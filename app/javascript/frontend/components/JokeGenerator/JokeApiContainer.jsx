import React, { Component } from 'react';
import axios from 'axios';

import JokeApiView from './JokeApiView';

export default class JokeApiContainer extends Component {
  constructor(props) {
    super(props);
    
    this.submitRequest = this.submitRequest.bind(this);
  }
  
  submitRequest() {
    const {
      cueWord,
      updateJoke,
    } = this.props;
    
    axios.get(`/jokes/send_api_request?cue_word=${ cueWord }`)
      .then(res => {
        updateJoke(res.data.joke);
      });
  }

  render() {
    return (
      <JokeApiView 
        submitRequest={ this.submitRequest }
      />
    );
  }
}