/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text style={styles.boldText}>Bold orange text!</Text>
          <Text style={styles.redText}>Red text!</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange',
    alignItems : 'center',
    marginLeft: 10,
  },
  redText: {
    fontSize: 25,
    fontWeight: '500',
    color: 'red',
    alignItems : 'center',
    marginLeft: 10,
  },
});

export default App;
