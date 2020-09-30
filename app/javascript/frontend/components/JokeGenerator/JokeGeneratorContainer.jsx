import React, { Component } from 'react';

import JokeGeneratorView from './JokeGeneratorView';

export default class JokeGeneratorContainer extends Component { 
    constructor(props) {
      super(props);
      
      this.state = {
        joke: 'Why did the chicken cross the road??',
      };
      
      this.updateJoke = this.updateJoke.bind(this);
    }
    
    updateJoke(newJoke) {
      this.setState({ joke: newJoke });
    }

    render() {
      const { 
        joke, 
      } = this.state;
      
      return (
        <JokeGeneratorView
          joke={ joke }
          updateJoke={ this.updateJoke }
        />
      );
    }
}