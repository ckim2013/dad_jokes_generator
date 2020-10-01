import React, { Component } from 'react';

import JokeAccuracyView from './JokeAccuracyView';

export default class JokeAccuracyContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      accuracy, 
      onChange,
    } = this.props;
    
    return (
      <JokeAccuracyView 
        accuracy={ accuracy }
        onChange={ onChange }
      />
    );
  }
  
}