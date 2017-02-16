import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  optionButton: {
    color: 'white',
    fontSize: 20,
  },
});

export default function Button(props) {
  return (
    props.side === 'left' ?
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor={'deepskyblue'}
    >
      <Text style={styles.optionButton}>
        {'< '}{props.label}
      </Text>
    </TouchableHighlight>
    :
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor={'deepskyblue'}
    >
      <Text style={styles.optionButton}>
        {props.label}{' >'}
      </Text>
    </TouchableHighlight>
  );
}
