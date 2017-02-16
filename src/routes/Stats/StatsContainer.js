import React, { Component } from 'react';
import Stats from './Stats';

export default class StatsContainer extends Component {
  render() {
    return (
      <Stats
        sceneTitle={this.props.sceneTitle}
        statsToFocus={this.props.statsToFocus}
      />
    );
  }
}
