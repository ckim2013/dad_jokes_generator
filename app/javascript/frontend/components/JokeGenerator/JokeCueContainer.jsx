import React, { Component } from 'react';

import JokeCueView from './JokeCueView';

export default class JokeCueContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      onChange,
      updateCueWord,
    } = this.props;
    
    return (
      <JokeCueView 
        onChange={ onChange }
        updateCueWord={ updateCueWord }
      />
    );
  }
}