import { View, Text } from 'react-native'
import React from 'react'
import { db } from '../Firebase.services/firebase.config'
import { collection, doc, setDoc } from 'firebase/firestore'

export default async function SetData({collectionDB,idDoc,data}) {
    try {
        const docRef =  setDoc(doc(collection(db, collectionDB)), data)
        console.log(docRef);
    } catch (error) {
        console.log("je suis erreur",error);
    }
    
}