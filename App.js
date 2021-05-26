/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import AppH from './components/homescreen.js';
import AppHistory from './components/history.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';



// const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


const App= () => {

  return (
    <NavigationContainer>
    {/* <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AppH}
        options={{ title: 'Power Usage' }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator> */}
  <Tab.Navigator>
    <Tab.Screen name = "Home" component={AppH} options={{tile: 'Power Usage'}}/>
    <Tab.Screen name = "History" component={AppHistory} options={{tile: 'History'}}/>
    </Tab.Navigator>
  </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
