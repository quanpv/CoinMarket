/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Tab from './navigators/Tab';

class App extends React.Component {
  render() {
    return (
      <Tab
        onNavigationStateChange={() => ({ /* don't show navigation change logs */ })}
      />
    );
  }
}

export default App;
