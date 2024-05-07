import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons,Feather} from '@expo/vector-icons'; 
import { PrimaryBGC } from '../../../assets/theme/theme';

export default function UploadImage({onImageUpload}) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    console.log("press ??");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    onImageUpload(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{position:"absolute", top:"41vh", right:30}}>
      <TouchableOpacity onPress={pickImage} style = {styles.button}>
      <Feather name='plus' color={'black'} size={24} style = {styles.textButton}/>
      </TouchableOpacity>
      </View>
      {image &&  <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  button:{
    // position:"absolute",
    width:70,
    height:70,
    backgroundColor:PrimaryBGC,
    borderRadius:50,
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center",
    shadowColor: '#ddd',
    elevation:3,
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  textButton:{
    color:"white",
    textAlign:"center"
  }
});
