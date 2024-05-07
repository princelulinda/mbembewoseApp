import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/navigation/bottomTab/BottomTab';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationStack from './src/navigation/navigationStack/NavigationStack';
import Verication from './src/navigation/verification/Verication';



const Stack = createStackNavigator();

export default function App() {
  return (
   <Verication/>
  );
}
