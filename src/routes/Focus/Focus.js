import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';

const { func } = PropTypes;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

export default class Focus extends Component {
  static propTypes = {
    focusToSettings: func,
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>Focus Scene</Text>
        <TouchableHighlight
          onPress={this.props.focusToSettings}
        >
          <Text>Settings</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.props.focusToStats}
        >
          <Text>Stats</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
