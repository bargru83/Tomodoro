import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import FocusContainer from '../Focus/FocusContainer';
import SettingsContainer from '../Settings/SettingsContainer';
import StatsContainer from '../Stats/StatsContainer';

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'skyblue',
  },
});

class App extends Component {

  configureScene = (route) => {
    if (route.settings) {
      return Navigator.SceneConfigs.FloatFromLeft;
    } else if (route.stats) {
      return Navigator.SceneConfigs.FloatFromRight;
    }
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  renderScene = (route, navigator) => {
    if (route.focus) {
      return <FocusContainer
        focusToSettings={() => {
          navigator.push({
            settings: true,
          });
        }}
        focusToStats={() => {
          navigator.push({
            stats: true,
          });
        }}
        sceneTitle={'Focus'}
      />;
    } else if (route.settings) {
      return <SettingsContainer
        settingsToFocus={() => {
          navigator.pop();
        }}
        sceneTitle={'Settings'}
      />;
    } else if (route.stats) {
      return <StatsContainer
        statsToFocus={() => {
          navigator.pop();
        }}
        sceneTitle={'Stats'}
      />;
    }
  }

  render() {
    return (
      <Navigator
        style={styles.view}
        initialRoute={{ focus: true }}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
}

function mapStateToProps({ app }) {
  return {
    app,
  };
}

export default connect(mapStateToProps)(App);
