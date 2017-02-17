import React, { Component } from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';

class SettingsContainer extends Component {
  render() {
    return (
      <Settings
        sceneTitle={this.props.sceneTitle}
        settingsToFocus={this.props.settingsToFocus}
      />
    );
  }
}

function mapStateToThis({ app }) {
  return {
    app,
  };
}

export default connect(mapStateToThis)(SettingsContainer);
