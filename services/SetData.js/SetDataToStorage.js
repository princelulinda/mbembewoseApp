import { View, Text } from 'react-native'
import React from 'react'
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../Firebase.services/firebase.config';

export default function SetDataToStorage({filename,file}) {
    const spaceRef = ref(storage, filename);
    uploadBytes(spaceRef, file).then((snapshot) => {
        console.log('Uploaded');
      });
}