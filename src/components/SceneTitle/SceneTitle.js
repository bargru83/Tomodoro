import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sceneTitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default function Button(props) {
  return (
    <Text style={styles.sceneTitle}>
      {props.sceneTitle}
    </Text>
  );
}
