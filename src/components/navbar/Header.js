import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import SearchBar from '../searchBar.component/serchbar'
import { Ionicons,Feather} from '@expo/vector-icons'; 
import { PrimaryBGC, secondaryColor, whiteColor } from '../../../assets/theme/theme';

export default function Header() {
  return (
    <View style ={styles.container}>
      <View style={styles.headerBar}>
      <Image source={require("../../../assets/avatar.png")} style={styles.avatar}/>
      <View>
        <SearchBar placeholder="search..."/>
      </View>
      <View style={styles.icons}>
      <Ionicons name="notifications" size={24} color={secondaryColor}/>
      <Feather name="message-circle" size={24} color={whiteColor} />
      </View>
    </View>
    <View style={styles.headerOptions}>
      <TouchableOpacity>
       <Text style={{fontSize:20, color:secondaryColor, fontWeight:"bold", borderBottomColor:secondaryColor, borderBottomWidth:3}}> Actualité</Text>
      </TouchableOpacity>
      <TouchableOpacity>
       <Text style={{fontSize:20, color:whiteColor, fontWeight:"bold"}}>Radios</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:PrimaryBGC,
    shadowColor: '#ddd',
    elevation:1.7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerBar:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    padding:20,
  },
avatar:{
  height:40,
  width:40,
  borderRadius:50
},
icons:{
  flexDirection:"row"
},
headerOptions:{
  flexDirection:"row",
  width:"100%",
  gap:"10%",
  justifyContent:"center",
  alignItems:"center",
  marginTop:10,
  marginBottom:5
}
})