import React from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Pokedex from './pages/pokedex';
import Header from './components/Header';
import Home from './pages/home';

const { Navigator, Screen } = createStackNavigator();

const Router = () => {
    
   
    

    return(
        <NavigationContainer>
              <Navigator 
                 screenOptions={{
                     headerShown: false,
                     cardStyle: {backgroundColor: '#f2f3f5'}
                 }}
                >
               <Screen name="home" component={Home}   />
                <Screen name="pokedex" component={Pokedex}   />     
              </Navigator>
        </NavigationContainer>
    )
}




export default Router
