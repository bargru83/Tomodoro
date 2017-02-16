import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles={
  text: {
    fontSize: 75,
    color: 'white',
  },
};

export default function Timer(props) {
  return (
    <Text style={styles.text}>{props.timeRemaining}</Text>
  );
}
