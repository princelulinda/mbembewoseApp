import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from '../Firebase.services/firebase.config';

export default function GetImagesTostorage({imageName}) {
 const [imagePath, SetImagePath] = useState(null)
    getDownloadURL(ref(storage, `PostsFile/${imageName}`))
      .then((url) => {
        SetImagePath(url)
        })
      .catch((error) => {
      console.log(error);
      });
  return (
    <View>
      <Image source={{ uri:imagePath }} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode:"contain",
        borderRadius: 7,
      },
})