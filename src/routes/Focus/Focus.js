import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import Timer from '../../components/Timer';
import Button from '../../components/Button';
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
});

export default class Focus extends Component {
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
          timeRemaining={'00:00'}
        />
        <Button
          title={'Start Session'}
        />
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
