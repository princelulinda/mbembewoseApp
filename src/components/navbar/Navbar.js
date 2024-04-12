import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Navbar() {
  return (
    <View>
      <Image source={require("../../../assets/avatar.png ")} style={{width:100, height:100}}/>
    </View>
  )
}