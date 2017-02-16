import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
});

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>Settings Scene</Text>
        <TouchableHighlight
          onPress={this.props.settingsToFocus}
        >
          <Text>Back to Focus</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
