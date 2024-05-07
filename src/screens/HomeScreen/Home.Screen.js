import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/navbar/Header'
import PostCard from '../../components/postCard.component/PostCard'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PrimaryBGC } from '../../../assets/theme/theme';
import ArchiveScreen from '../ArchiveScreen/ArchiveScreen';
import AudioArchiveScreen from '../AudioArchive/AudioArchive';
import AudioPlayer from '../AudioPlayerScreen/AudioPlayer';
import A from '../../navigation/navigationStack/archiveNavigation';
const Tab = createMaterialTopTabNavigator()
export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Tab.Navigator>
      <Tab.Screen name="Actualiter" component={PostCard} />
      <Tab.Screen name="Radios" component={PostCard} />
      <Tab.Screen name="Archives" component={ArchiveScreen} />
      </Tab.Navigator>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1
  }
})