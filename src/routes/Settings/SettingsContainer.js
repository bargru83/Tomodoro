import React, { Component } from 'react';
import Settings from './Settings';

export default class SettingsContainer extends Component {
  render() {
    return (
      <Settings
        settingsToFocus={this.props.settingsToFocus}
      />
    );
  }
}
