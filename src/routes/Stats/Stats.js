import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SceneTitle from '../../components/SceneTitle';
import OptionsButton from '../../components/OptionsButton';
import Stat from '../../components/Stat';

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

class Stats extends Component {
  render() {
    return (
      <View style={styles.sceneWrapper}>

        <View style={styles.sceneTitleWrapper}>
          <SceneTitle sceneTitle={this.props.sceneTitle} />
        </View>

        <Stat
          label={'Sessions Completed'}
          output={this.props.sessionsCompleted}
          unit={'session'}
        />

        <Stat
          label={'Session Time Completed'}
          output={this.props.sessionTimeCompleted}
          unit={'minute'}
        />

        <Stat
          label={'Sessions Cancelled'}
          output={this.props.sessionsCancelled}
          unit={'session'}
        />

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

function mapStateToThis({ app }) {
  return {
    app,
  };
}

export default connect(mapStateToThis)(Stats);
