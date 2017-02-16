import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import SceneTitle from '../../components/SceneTitle';
import OptionsButton from '../../components/OptionsButton';

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
    justifyContent: 'flex-start',
    paddingRight: 20,
    paddingLeft: 20,
  },
});

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.sceneWrapper}>

        <View style={styles.sceneTitleWrapper}>
          <SceneTitle sceneTitle={this.props.sceneTitle} />
        </View>

        <View style={styles.optionButtonsWrapper}>
          <OptionsButton
            onPress={this.props.statsToFocus}
            label={'Focus'}
            side={'left'}
          />
        </View>
      </View>
    );
  }
}
