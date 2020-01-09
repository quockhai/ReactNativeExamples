/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
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

class Greeting extends Component {
  render() {
    return(
    <View style={styles.sectionTitle}>
      <Text> Hello {this.props.name}!</Text>
    </View>
    );
  }
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text style={styles.sectionTitle}> Hello React Native!</Text>
        </View>
        
        <Greeting name='Khai'></Greeting>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.dark,
    textAlign: 'center',
    marginTop: 100,
    justifyContent: "center",
    alignItems:'center',
  },
});

export default App;
