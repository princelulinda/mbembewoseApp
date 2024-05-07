import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import { PrimaryBGC, secondaryColor } from '../../../assets/theme/theme';
import A from '../../navigation/navigationStack/archiveNavigation';
import AudioArchiveScreen from '../AudioArchive/AudioArchive';
import ArchiveBookScreen from '../ArchiveBookScreen/ArchiveBook';
import VideoArchiveScreen from '../ArchiveVideo/ArchiveVideo';
import CustomModal from '../../components/Modal';

const ArchiveScreen = () => {
  const [Press, setPress] = useState({
    pressStatus:false,
    pressDirection:""
  })
const [ModalVisible, setModalVisible] = useState(false)
  const ArchiveRender = ()=>{
   if (Press.pressDirection === "audio") {
    return(
        <AudioArchiveScreen/>
    )
   } else if (Press.pressDirection === "video") {
    return(
    <VideoArchiveScreen/>
    )
   } else if (Press.pressDirection === "Livres") {
    return(
      <ArchiveBookScreen/>
    )
  }
  }
  return (
    <View style={styles.container}>
     <View style = {{flexDirection:"row"}}>
     <Pressable onPress={()=>setPress({
         pressStatus:false,
         pressDirection:""
     })}>
         <Text style={styles.title}>Archives</Text>
      </Pressable>
      <Text style={styles.title}>
        {">"+  Press.pressDirection}
      </Text>
     </View>


     {Press.pressStatus? <ArchiveRender/>:
     
     
     <View>
     <Pressable style={styles.archiveType}
     onPress={()=>setPress({
      pressStatus:true,
      pressDirection:"audio"
    })}
     >
    <View  style={{flexDirection:"row", gap:7}}>
    <FontAwesome name="file-audio-o" size={24} color={PrimaryBGC} />
    <Text style={styles.archiveTypeTitle}>Audio</Text>
    <Text  style={styles.archiveNumber}>19</Text>
    </View>
    <AntDesign name="right" size={24} color={PrimaryBGC} />
    
  </Pressable>
  <Pressable style={styles.archiveType}
  onPress={()=>setPress({
    pressStatus:true,
    pressDirection:"video"
  })}
  >
    <View style={{flexDirection:"row", gap:7}}>
    <FontAwesome name="file-video-o" size={24} color={PrimaryBGC} />
    <Text style={styles.archiveTypeTitle}>Vidéo</Text>
    <Text style={styles.archiveNumber}>10</Text>
    </View>
    <AntDesign name="right" size={24} color={PrimaryBGC} />
   
  </Pressable>
  <Pressable style={styles.archiveType} onPress={()=>setPress({
    pressStatus:true,
    pressDirection:"Livres"
  })}>
    <View  style={{flexDirection:"row", gap:7}}>
        <AntDesign name="book" size={24} color={PrimaryBGC} />
        <Text style={styles.archiveTypeTitle}>Livre</Text>
        <Text style={styles.archiveNumber}>190</Text>
    </View>
    <AntDesign name="right" size={24} color={PrimaryBGC} />

  </Pressable>
  <Pressable  onPress={() => setModalVisible(true)} style={styles.addAcrchiveBtn}>
    <View style={{justifyContent:"center", alignContent:"center", flexDirection:"row"}}>
      <AntDesign name='cloudupload' color={"#fff"} size={40}/>
      <Text style={{color:"#fff",fontSize:17}}>
    Créer une nouvelle archive
      </Text>
    </View>
  </Pressable>
  </View>
     }
     <CustomModal visible={ModalVisible}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  archiveType: {
    marginBottom: 10,
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#fff",
    padding:20,
    borderRadius:5,

  },
  archiveTypeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addAcrchiveBtn:{
    backgroundColor:PrimaryBGC,
    padding:15,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5
  },
  archiveNumber:{
    color:secondaryColor, 
    backgroundColor:"#ddd", 
  paddingVertical:5, 
  paddingHorizontal:7, 
  fontWeight:"bold", 
  borderRadius:50}
});

export default ArchiveScreen
