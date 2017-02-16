import React, { Component } from 'react';
import Focus from './Focus';

export default class FocusContainer extends Component {
  render() {
    return (
      <Focus
        focusToSettings={this.props.focusToSettings}
        focusToStats={this.props.focusToStats}
      />
    );
  }
}
