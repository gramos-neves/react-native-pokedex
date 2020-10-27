import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Background from '../assets/pokeball02.png';

const Home = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  function handleNavigateToPokedex() {
    navigation.navigate('pokedex',{name});
  }

  return (
    <ScrollView>
      <ImageBackground
        source={Background}
        style={styles.backgroundImage}></ImageBackground>
      <View style={styles.containerImagem}>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <TouchableOpacity
          style={styles.botaoPokedex}
          onPress={() => {
            handleNavigateToPokedex();
          }}>
          <Feather name="search" size={24} color="#FFF"></Feather>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerImagem: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botaoPokedex: {
    height: 60,
    backgroundColor: '#e03a3a',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  input: {
    height: 60,
    width: 280,
    backgroundColor: '#fff',
    borderColor: '#e27676',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    padding: 15,
    borderWidth: 1,
    fontSize: 24,
  },
  backgroundImage: {
    marginTop: -100,
    height: 600,
    width: 600,
    marginStart: -300,
  },
});

export default Home;
