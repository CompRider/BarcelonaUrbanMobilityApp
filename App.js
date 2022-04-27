/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import {Provider as PaperProvider, Colors} from 'react-native-paper';
import Navigation from './src/navigation';

const App: () => Node = () => {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default App;
