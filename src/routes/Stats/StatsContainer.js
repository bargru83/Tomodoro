import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stats from './Stats';

class StatsContainer extends Component {
  render() {
    return (
      <Stats
        sceneTitle={this.props.sceneTitle}
        statsToFocus={this.props.statsToFocus}
        sessionsCompleted={this.props.app.sessionsCompleted}
        sessionTimeCompleted={this.props.app.sessionTimeCompleted}
        sessionsCancelled={this.props.app.sessionsCancelled}
      />
    );
  }
}

function mapStateToThis({ app }) {
  return {
    app,
  };
}

export default connect(mapStateToThis)(StatsContainer);
