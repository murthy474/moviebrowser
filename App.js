import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/Router';
import Expo from 'expo';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1,paddingTop:Expo.Constants.statusBarHeight}}>
       <Router/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
