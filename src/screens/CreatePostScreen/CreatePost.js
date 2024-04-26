import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import UploadImage from '../../components/uploadImage.component/UploadImage'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PrimaryBGC } from '../../../assets/theme/theme'

const CreatePost = () => {
  return (
    <View style = {styles.container}>
        <View style={{width:"100%",alignItems:"flex-end"}}>
            <TouchableOpacity >
                <Text style={{fontSize:20, color:PrimaryBGC}}>
                    publier
                </Text>
            </TouchableOpacity>
        </View>
        <View>
            <TextInput 
              multiline={true}
              numberOfLines={4}  
              placeholder="Enter your text here..."
            style = {styles.input}/>
        </View>
      <UploadImage/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical:20,
    },
    input:{
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 16,
        height: 200, 
    }
})
export default CreatePost