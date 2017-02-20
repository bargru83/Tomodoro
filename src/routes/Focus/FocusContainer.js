import React, { Component } from 'react';
import { connect } from 'react-redux';
import Focus from './Focus';
import { formatTime, decrementTime } from '../../lib/timeHelper';
import { startSession, cancelSession } from '../../reducers/app/app';

class FocusContainer extends Component {

  state = {
    minutesRemaining: this.props.app.sessionDuration,
    secondsRemaining: '00',
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ minutesRemaining: nextProps.app.sessionDuration });
  }

  tick = () => {
    console.log('tick');

    const { min, sec } = decrementTime(this.state.minutesRemaining, this.state.secondsRemaining);
    this.setState({
      minutesRemaining: min,
      secondsRemaining: sec,
    });
  }

  startSession = () => {
    if (!this.props.app.sessionStarted) {
      this.props.dispatch(startSession());

      this.session = setInterval(this.tick, 1000);
    }
  }

  cancelSession = () => {
    if (this.props.app.sessionStarted) {
      this.props.dispatch(cancelSession(this.props.app.sessionsCancelled));
      clearInterval(this.session);
      this.setState({ secondsRemaining: '00' });
    }
  }

  render() {
    return (
      <Focus
        sceneTitle={this.props.sceneTitle}
        focusToSettings={this.props.focusToSettings}
        focusToStats={this.props.focusToStats}
        timeRemaining={formatTime(this.state.minutesRemaining, this.state.secondsRemaining)}
        startSession={this.startSession}
        cancelSession={this.cancelSession}
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
