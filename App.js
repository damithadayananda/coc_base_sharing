/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import {
  View,
  Button,
  Linking,
  Alert,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from './components/home';
import homeLayout from './components/home/home_layout';
import homeMap from './components/home/home_map';
import { init } from "./services/bases_service";
import builderLayout from './components/builder/builder_layout';
import builderMap from './components/builder/builder_map';
import { Card } from "react-native-paper";
import { CardImage } from "react-native-material-cards";
import FunnyLayout from "./components/funny/funny_layout";
import FunnyMap from "./components/funny/funny_map";
import Guides from "./components/guides/guides";

const handlePress = async () => {
  // Checking if the link is supported for links with custom URL scheme.
  const url =
    'https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AHV%3AAAAACgAAAAIjRfqics_ZkJTRh6Vec9Wu';
  const supported = await Linking.canOpenURL(url);

  if (true) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};
const App: () => Node = () => {
  init();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={home} />
        <Stack.Screen name={'HomeLayout'} component={homeLayout} />
        <Stack.Screen name={'HomeMap'} component={homeMap} />
        <Stack.Screen name={'BuilderLayout'} component={builderLayout} />
        <Stack.Screen name={'BuilderMap'} component={builderMap} />
        <Stack.Screen name={'FunnyLayout'} component={FunnyLayout} />
        <Stack.Screen name={'FunnyMap'} component={FunnyMap} />
        <Stack.Screen name={'Guide'} component={Guides} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
