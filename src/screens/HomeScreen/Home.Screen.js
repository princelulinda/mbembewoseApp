import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/navbar/Header'
import PostCard from '../../components/postCard.component/PostCard'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <PostCard/>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:1
  }
})