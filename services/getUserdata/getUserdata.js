import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '../Firebase.services/firebase.config';
import { doc, getDoc } from 'firebase/firestore';

function UserDataFetcher() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const userToken = await AsyncStorage.getItem('uid');
        setToken(userToken);
      } catch (error) {
        console.log("Erreur lors de la récupération du token : ", error);
      }
    };

    getToken();
  }, []);

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const dataRef = doc(db, "Users", token);
          const docSnap = await getDoc(dataRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            await AsyncStorage.setItem("user", JSON.stringify(userData));
            console.log("Données utilisateur enregistrées avec succès.");
          } else {
            console.log("Aucune donnée trouvée pour cet utilisateur.");
          }
        } catch (error) {
          console.log("Erreur lors de la récupération des données utilisateur : ", error);
        }
      };
      fetchData();
    }
  }, [token]);


  return null; 
}

export default UserDataFetcher;
