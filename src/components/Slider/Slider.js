import React from 'react';
import { Slider, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  sliderWrapper: {
    backgroundColor: 'skyblue',
    width: 250,
    padding: 20,
    marginBottom: 40,
  },
  label: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  output: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});

export default function Button(props) {
  return (
    <View style={styles.sliderWrapper}>
      <Text style={styles.label}>{props.label}</Text>
      <Slider
        maximumTrackTintColor={'white'}
        minimumTrackTintColor={'deepskyblue'}
        maximumValue={props.maxVal}
        minimumValue={props.minVal}
        value={props.val}
      />
      <Text style={styles.output}>Output Placeholder</Text>
    </View>
  );
}
