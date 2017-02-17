import React, { Component } from 'react';
import { connect } from 'react-redux';
import Focus from './Focus';

class FocusContainer extends Component {
  render() {
    return (
      <Focus
        sceneTitle={this.props.sceneTitle}
        focusToSettings={this.props.focusToSettings}
        focusToStats={this.props.focusToStats}
      />
    );
  }
}

function mapStateToThis({ app }) {
  return {
    app,
  };
}

export default connect(mapStateToThis)(FocusContainer);
