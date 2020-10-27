import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Header from '../components/Header';
import api from '../service/api';

interface PokemonName {
  name: string;
}

interface PokemonTypes {
  name: string;
}

interface PokemonStat {
  name: string;
}

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{
    type: PokemonTypes;
  }>;
  stats: Array<{
    base_stat: number;
    stat: PokemonTypes;
  }>;
}

const pokedex = () => {
  const router = useRoute();
  const [pokemon, setPokemon] = useState<Pokemon>();

  const params = router.params as PokemonName;

  useEffect(() => {
    const {name} = params;

    async function loadPokemon() {
      await api
        .get(`/${name.toLocaleLowerCase()}`)
        .then((resp) => {
          setPokemon(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    loadPokemon();

    // console.log(name)
  }, []);

  return (
    <ScrollView >
      <Header name={pokemon?.name} id={pokemon?.id} />
      <View style={styles.containerBody}>
        
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`,
            }}
          />
        </View>
      

        <View style={styles.title}>
          {pokemon?.types.map((resp) => {
            return (
              <Text key={resp.type.name} style={styles.titleNome}>
                {resp.type.name}
              </Text>
            );
          })}
        </View>

        <View  style={styles.containerStart} >
          {pokemon?.stats.map((resp) => {
            return (
             <View key={resp.stat.name}> 
              <View  style={styles.containerStars}>
                <Text style={styles.statsName}>{resp.stat.name}</Text>
                <Text style={styles.statsPower}>{resp.base_stat}</Text>
              </View>
                <View style={styles.progressBar}>
                  <Animated.View
                    style={{
                      backgroundColor: '#725ca7',
                      width: resp.base_stat,
                      borderRadius: 10,
                    }}
                  />
                </View>
              
             </View> 
            );
          })}
        </View>
        
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    marginLeft: 70,
  },
  image: {
    height: 300,
    width: 300,
  },
  containerBody: {
    marginTop: -220,
    
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  titleNome: {
    color: '#FFF',
    backgroundColor: '#725ca7',
    width: 160,
    padding: 10,
    borderRadius: 20,
    textAlign: 'center',
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%' ,
    backgroundColor: '#bfb6d6',
    borderColor: '#c2abf7',
    borderRadius: 10,
  },
  containerStart:{
     padding: 24  
  },
  containerStars: {
    padding: 2, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#725ca7',
  },
  statsPower: {
    marginRight: 5,
    color: '#725ca7',
  },
});

export default pokedex;
