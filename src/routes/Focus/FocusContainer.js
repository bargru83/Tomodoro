import React, { Component } from 'react';
import { connect } from 'react-redux';
import Focus from './Focus';
import { formatTime, decrementTime } from '../../lib/timeHelper';
import { startSession, cancelSession, pauseSession, resumeSession, completeSession } from '../../reducers/app/app';

class FocusContainer extends Component {

  state = {
    minutesRemaining: this.props.app.sessionDuration,
    secondsRemaining: '00',
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.app.sessionStarted) {
      this.setState({ minutesRemaining: nextProps.app.sessionDuration });
    }
  }

  tick = () => {
    if (!this.props.app.sessionPaused) {
      const { min, sec } = decrementTime(this.state.minutesRemaining, this.state.secondsRemaining);
      this.setState({
        minutesRemaining: min,
        secondsRemaining: sec,
      });
      if (min === '0' && sec === '00') {
        this.completeSession();
      }
    }
  }

  startSession = () => {
    if (!this.props.app.sessionStarted) {
      this.totalDurationOfCurrentSession = this.props.app.sessionDuration;
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

  pauseSession = () => {
    if (this.props.app.sessionStarted) {
      this.props.dispatch(pauseSession());
    }
  }

  resumeSession = () => {
    if (this.props.app.sessionPaused) {
      this.props.dispatch(resumeSession());
    }
  }

  completeSession = () => {
    if (this.props.app.sessionStarted) {
      clearInterval(this.session);
      const newSessionsCompleted = this.props.app.sessionsCompleted + 1;
      const totalSessionTimeCompleted = this.props.app.sessionTimeCompleted + this.totalDurationOfCurrentSession;
      this.props.dispatch(completeSession(newSessionsCompleted, totalSessionTimeCompleted));
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
        pauseSession={this.pauseSession}
        resumeSession={this.resumeSession}
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
