import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SceneTitle from '../../components/SceneTitle';
import OptionsButton from '../../components/OptionsButton';
import Slider from '../../components/Slider';
import { durationChangeSession, durationChangeBreak } from '../../reducers/app/app';

const styles = StyleSheet.create({
  sceneWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
  },
  sceneTitleWrapper: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
  },
  optionButtonsWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingLeft: 20,
  },
});

class Settings extends Component {
  state = {
    sessionDuration: this.props.app.sessionDuration,
    breakDuration: this.props.app.breakDuration,
  };

  sessionDurationChanging = (value) => {
    this.setState({ sessionDuration: value });
  }

  sessionDurationChanged = (value) => {
    this.props.dispatch(durationChangeSession(value));
  }

  breakDurationChanging = (value) => {
    this.setState({ breakDuration: value });
  }

  breakDurationChanged = (value) => {
    this.props.dispatch(durationChangeBreak(value));
  }

  render() {
    return (
      <View style={styles.sceneWrapper}>

        <View style={styles.sceneTitleWrapper}>
          <SceneTitle sceneTitle={this.props.sceneTitle} />
        </View>

        <Slider
          label={'Session Duration'}
          unit={'minute'}
          maxVal={60}
          minVal={1}
          step={1}
          val={this.state.sessionDuration}
          onValueChange={this.sessionDurationChanging}
          onSlidingComplete={this.sessionDurationChanged}
        />

        <Slider
          label={'Break Duration'}
          unit={'minute'}
          maxVal={60}
          minVal={1}
          step={1}
          val={this.state.breakDuration}
          onValueChange={this.breakDurationChanging}
          onSlidingComplete={this.breakDurationChanged}
        />

        <View style={styles.optionButtonsWrapper}>
          <OptionsButton
            onPress={this.props.settingsToFocus}
            label={'Focus'}
            side={'right'}
          />
        </View>
      </View>
    );
  }
}

function mapStateToThis({ app }) {
  return {
    app,
  };
}

export default connect(mapStateToThis)(Settings);
