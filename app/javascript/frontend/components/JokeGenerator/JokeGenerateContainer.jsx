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
      accuracy,
      cueWord,
      updateJoke,
    } = this.props;
    
    const csrfToken = document.querySelector("meta[name=csrf-token]").content;
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
    
    axios.get(`/jokes/generate/?accuracy=${ accuracy }&cue_word=${ cueWord }`)
      .then((res) => {
        updateJoke(res.data.joke);
      })
      .catch((res) => {
        updateJoke(res.response.data.error);
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