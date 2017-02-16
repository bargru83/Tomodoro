import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import Timer from '../../components/Timer';
import Button from '../../components/Button';

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
  sceneTitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
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
          <Text style={styles.sceneTitle}>
            {this.props.sceneTitle}
          </Text>
        </View>

        <Timer
          timeRemaining={'00:00'}
        />
        <Button
          title={'Start Session'}
        />
        <View style={styles.optionButtonsWrapper}>
          <TouchableHighlight
            onPress={this.props.focusToSettings}
            underlayColor={'deepskyblue'}
          >
            <Text style={styles.optionButton}>
              {'< '}Settings
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.props.focusToStats}
            underlayColor={'deepskyblue'}
          >
            <Text style={styles.optionButton}>
              Stats{' >'}
            </Text>
          </TouchableHighlight>
        </View>
      </View >
    );
  }
}
