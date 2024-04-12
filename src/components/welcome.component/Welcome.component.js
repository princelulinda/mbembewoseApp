import React, { useState, useEffect } from 'react';
import { Animated, Image,StyleSheet, View, Dimensions, Button, TouchableOpacity, Text } from 'react-native';
import { PrimaryBGC } from '../../../assets/theme/theme';
import { Foundation } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons' ;

const AnimatedImage = () => {
  return (
    <View style={styles.container}>
   <View style={{justifyContent:"center", alignItems:"center"}}>
    <Text style={{color:"white", fontSize:30, fontWeight:"bold"}}>
      LUBUNGA
    </Text>

      <Image source={require("../../../assets/mbembeLOgo.png")} style={styles.image}/>
   </View>
   <View>
    <Text>
      creer votre compte avec :
    </Text>
    </View>
  <View style={{gap:10}}>
  <TouchableOpacity style={styles.Button}>
        <Foundation name="telephone" size={30} color="white" />
        <Text style={{color:"#fff", gap:5}}>
          telephone
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Button}>
        <Fontisto name="email" size={30} color="white" />
        <Text style={{color:"#fff", gap:5}}>
            email
        </Text>
    </TouchableOpacity>
  </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: PrimaryBGC,
      alignItems: 'center',
      justifyContent:"center",
      gap:15
    },
    image:{
        resizeMode:"contain",
        width:250,
        height:250
        
    },
    Button:{
        paddingVertical:10,
        paddingHorizontal:80,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    }
})
export default AnimatedImage;
