import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default class Stats extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>Stats Scene</Text>
        <TouchableHighlight
          onPress={this.props.statsToFocus}
        >
          <Text>Back to Focus</Text>
        </TouchableHighlight>
      </View>);
  }
}
