import React, { useState, useEffect } from 'react';
import { Animated, Image,StyleSheet, View, Dimensions, Button, TouchableOpacity, Text } from 'react-native';
import { PrimaryBGC, secondaryColor, whiteColor} from '../../../assets/theme/theme';
import { Foundation } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons' ;

const Welcom = ({navigation}) => {
  return (
    <View style={styles.container}>
   <View style={{justifyContent:"center", alignItems:"center"}}>
    <Text style={{color:PrimaryBGC, fontSize:30, fontWeight:"bold",}}>
      LUBUNGA
    </Text>

      <Image source={require("../../../assets/Family-pana.png")} style={styles.image}/>
   </View>
   <View>
    <Text style={{color:PrimaryBGC, fontSize:21}}>
      creer votre compte avec :
    </Text>
    </View>
  <View style={{gap:10, width:"100%", padding:20}}>
  <TouchableOpacity style={[styles.Button,{backgroundColor:PrimaryBGC,}]}>
        <Foundation name="telephone" size={30} color={whiteColor} />
        <Text style={{color:whiteColor, gap:5, fontSize:18}}>
          telephone
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("SignUpWithEmail")}>
        <Fontisto name="email" size={30} color={PrimaryBGC} />
        <Text style={{color:PrimaryBGC, gap:5, fontSize:18}}>
            email
        </Text>
    </TouchableOpacity>
    <View style={{ flexDirection:"row", gap:5 }}>
    <Text>
    tu as un compte?
    </Text>
     <TouchableOpacity>
       <Text style={{color:PrimaryBGC, borderBottomColor:PrimaryBGC, borderBottomWidth:1}}>se connecter</Text>
      </TouchableOpacity> 
    </View>
  </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF",
      alignItems: 'center',
      justifyContent:"center",
      gap:15
    },
    image:{
        resizeMode:"contain",
        width:350,
        height:350
        
    },
    Button:{
        paddingVertical:7,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:PrimaryBGC,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:30,
    }
})
export default Welcom;
