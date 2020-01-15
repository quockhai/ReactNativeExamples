/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
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
      <SafeAreaView style={{
        flex: 1,
        flexDirection: 'column-reverse'
        }}>

      <View style={{
        height: 300,
      }}>
      <View style={{
        height: 100, 
        flexDirection: 'row',
        }}>

        <View style={styles.skyblueBox} />
        <View style={styles.steelblueBox} />
      </View>

      <View style={{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'stretch',
        }}>

        <View style={styles.skyblueBox} />
        <View style={styles.steelblueBox} />
      </View>

      <View style={{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'stretch',
        }}>

        <View style={styles.skyblueBox} />
        <View style={styles.steelblueBox} />
      </View>
      </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  skyblueBox: {
    flex: 1,
    height: 100,
    backgroundColor: 'skyblue',
    marginLeft: 10,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  },
  steelblueBox: {
    flex: 1,
    height: 100,
    backgroundColor: 'steelblue',
    marginLeft: 5,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5
  },
  
});

export default App;
