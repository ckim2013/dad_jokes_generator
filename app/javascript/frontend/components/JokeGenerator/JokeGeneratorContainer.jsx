import React, { Component } from 'react';

import JokeGeneratorView from './JokeGeneratorView';

export default class JokeGeneratorContainer extends Component { 
    constructor(props) {
      super(props);
      
      this.state = {
        accuracy: '',
        cueWord: '',
        joke: '',
      };
      
      this.onChange = this.onChange.bind(this);
      this.updateJoke = this.updateJoke.bind(this);
    }
    
    onChange(e) {
      const key = e.target.name;
      const value = e.target.value;
      if (key === 'accuracy' && !(/(?<!\S)[1-9](?!\S)/).test(value) && value !== '') return;
      this.setState({ [key]: value });
    }
    
    updateJoke(newJoke) {
      this.setState({ joke: newJoke });
    }
    
    render() {
      const { 
        accuracy,
        cueWord,
        joke, 
      } = this.state;
      
      return (
        <JokeGeneratorView
          accuracy={ accuracy }
          cueWord={ cueWord }
          joke={ joke }
          onChange={ this.onChange }
          updateJoke={ this.updateJoke }
        />
      );
    }
}