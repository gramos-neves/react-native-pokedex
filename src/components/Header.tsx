import React from 'react';
import {View, StyleSheet, Text, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface HeaderPros {
  id?: number;
  name?: string;
  showStar?: boolean;
}

const Header = ({name, showStar, id}: HeaderPros) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.Menu}>
          <BorderlessButton onPress={navigation.goBack}>
            <Feather name="arrow-left" size={24} color="#FFF" />
          </BorderlessButton>
          <Text style={styles.menuNome}>Pokédex</Text>
          <BorderlessButton>
            <Feather name="star" size={24} color="#FFF" />
          </BorderlessButton>
        </View>

        <View style={styles.containerNome}>
          <Text style={styles.titlePokemon}>{name}</Text>
          <Text style={styles.numeroPokemon}>#{id}</Text>
        </View>
      </View>
      <View style={styles.containerOval} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 0,
    backgroundColor: '#725ca7',
  },
  containerOval: {
    backgroundColor: '#725ca7',
    height: 200,
    borderBottomRightRadius: Dimensions.get('window').width,
    borderBottomLeftRadius: Dimensions.get('window').width,
    transform: [{scaleX: 2}],
  },
  Menu: {
    backgroundColor: '#725ca7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuNome: {
    color: '#FFF',
    fontSize: 16,
  },
  containerNome: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titlePokemon: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  numeroPokemon: {
    color: '#FFF',
    fontSize: 20,
  },
  
});

export default Header;
