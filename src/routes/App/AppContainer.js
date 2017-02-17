import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';

class AppContainer extends Component {
  render() {
    return (
      <App />
    );
  }
}

function mapStateToProps({ app }) {
  return {
    app,
  };
}

export default connect(mapStateToProps)(AppContainer);
