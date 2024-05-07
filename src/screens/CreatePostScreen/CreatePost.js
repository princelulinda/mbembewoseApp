import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UploadImage from '../../components/uploadImage.component/UploadImage';
import getUsersData from '../../../services/getUserdata/getUserdata';
import SetData from '../../../services/SetData.js/SetData';
import { PrimaryBGC } from '../../../assets/theme/theme';
import SetDataToStorage from '../../../services/SetData.js/SetDataToStorage';

const CreatePost = ({ navigation }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [user, setUser] = useState(null);
  const [errorMessage, seterrorMessage] = useState(" ")

  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem('user');
      setUser(JSON.parse(user));
    };

    getUser();
  }, []);

  const handleSubmit = async () => {
    try {
      if (!user || !description || !image) {
        console.error('User, description, or image is missing.');
        seterrorMessage("User, description, or image is missing.")
        console.log(user);
        return;
      }

      SetDataToStorage({ filename:`PostsFile/${image.assets[0].fileName}`, file: uploadedImage });

      const postData = {
        author: user,
        content: description,
        date: new Date(),
        fileName: image.assets[0].fileName,
      };

      await SetData({ collectionDB: 'Posts', data: postData });
      console.log('Post data inserted into Firebase Database:', postData);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={handleSubmit}>
          <Text style={{ fontSize: 20, color: PrimaryBGC, padding: 20 }}>publier</Text>
        </Pressable>
      ),
    });
  }, [navigation, uploadedImage]);

  const handleImageUpload = async (image) => {
    const response = await fetch(image.assets[0].uri);
    const blob = await response.blob();
    setUploadedImage(blob);
    setImage(image);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          multiline={true}
          placeholder="Enter your text here..."
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <Text>{errorMessage}</Text>
      <UploadImage onImageUpload={handleImageUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
    height: 200,
  },
});

export default CreatePost;
