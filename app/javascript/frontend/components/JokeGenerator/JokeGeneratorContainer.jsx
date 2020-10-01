import React, { Component } from 'react';

import JokeGeneratorView from './JokeGeneratorView';

export default class JokeGeneratorContainer extends Component { 
    constructor(props) {
      super(props);
      
      this.state = {
        cueWord: '',
        joke: "",
      };
      
      this.updateCueWord = this.updateCueWord.bind(this);
      this.updateJoke    = this.updateJoke.bind(this);
    }
    
    updateCueWord(e) {
      this.setState({ cueWord: e.target.value });
    }
    
    updateJoke(newJoke) {
      this.setState({ joke: newJoke });
    }
    
    render() {
      const { 
        cueWord,
        joke, 
      } = this.state;
      
      return (
        <JokeGeneratorView
          cueWord={ cueWord }
          joke={ joke }
          updateCueWord={ this.updateCueWord }
          updateJoke={ this.updateJoke }
        />
      );
    }
}