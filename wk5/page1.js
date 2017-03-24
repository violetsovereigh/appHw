/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

export default class wk5 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
  
      <Image style={styles.logo} source={require('./src/Asset/logo_twitch.png')} />


      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(100,65,165)',
  },
  logo:{
      height:100,
      width:210,
    backgroundColor: 'rgb(100,65,165)',
  }
  
});

AppRegistry.registerComponent('wk5', () => wk5);
