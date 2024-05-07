import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase.services/firebase.config';

export default function GetPost() {
    const unsub = onSnapshot(collection(db, 'Posts'), (snapshot) => {
        return snapshot.docChanges();
    });

   
}
