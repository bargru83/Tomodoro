import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Timer from '../../components/Timer';
import ButtonLarge from '../../components/ButtonLarge';
import ButtonSmall from '../../components/ButtonSmall';
import SceneTitle from '../../components/SceneTitle';
import OptionsButton from '../../components/OptionsButton';

const { func, string } = PropTypes;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  sceneWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  optionButtonsWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
  },
  optionButton: {
    color: 'white',
    fontSize: 20,
  },
  sceneTitleWrapper: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
  },
  multiButtonWrapper: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

class Focus extends Component {

  static propTypes = {
    focusToSettings: func,
    focusToStats: func,
    sceneTitle: string,
  }

  render() {
    return (
      <View style={styles.sceneWrapper}>

        <View style={styles.sceneTitleWrapper}>
          <SceneTitle sceneTitle={this.props.sceneTitle} />
        </View>

        <Timer
          timeRemaining={this.props.timeRemaining}
        />
        {!this.props.app.sessionStarted &&
          <ButtonLarge
            title={'Start Session'}
            onPress={this.props.startSession}
          />
        }
        {this.props.app.sessionStarted &&
          <View style={styles.multiButtonWrapper}>
            <ButtonSmall
              title={this.props.app.sessionPaused ? 'Resume' : 'Pause'}
              onPress={this.props.app.sessionPaused ? this.props.resumeSession : this.props.pauseSession}
            />
            <ButtonSmall
              title={'Cancel'}
              onPress={this.props.cancelSession}
            />
          </View>
        }
        <View style={styles.optionButtonsWrapper}>
          <OptionsButton
            onPress={this.props.focusToSettings}
            label={'Settings'}
            side={'left'}
          />

          <OptionsButton
            onPress={this.props.focusToStats}
            label={'Stats'}
            side={'right'}
          />

        </View>
      </View >
    );
  }
}

function mapStateToThis({ app }) {
  return {
    app,
  };
}

export default connect(mapStateToThis)(Focus);
