import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import Pokedex from './pages/pokedex';

import Routes from './routes'

const App = () => {
  return (
    <Routes />
  );
};

const styles = StyleSheet.create({
    container:{
        height: 300,
        width: 300,
        marginLeft: 70
    } ,
  image: {
    marginTop: -220,
    height: 300, 
    width: 300,
  },
});

export default App;
