import React, { Component } from 'react';

import JokeCueView from './JokeCueView';

export default class JokeCueContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      cueWord,
      updateCueWord,
    } = this.props;
    
    return (
      <JokeCueView 
        cueWord={ cueWord }
        updateCueWord={ updateCueWord }
      />
    );
  }
}