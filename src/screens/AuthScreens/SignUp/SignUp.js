import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Image, TouchableOpacity, Text } from 'react-native';
import { PrimaryBGC } from '../../../../assets/theme/theme';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from '../../../../services/Firebase.services/firebase.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addDoc, collection } from 'firebase/firestore';

const SignUp = () => {
  const [nom, setNom] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [Password, setPassword] = useState('');
  const [sexe, setSexe] = useState('');
  const [photoProfil, setPhotoProfil] = useState('');
  const [photoCouverture, setPhotoCouverture] = useState('');
  const [erreurs, setErreurs] = useState([]);

  const handleInscription = async () => {
    let erreurs = [];
    if (!nom) erreurs.push('Nom requis');
    if (!validateEmail(email)) erreurs.push('Email invalide'); 
    if (!email) erreurs.push('Email requis');
    if (!Password) erreurs.push('mot de passe requis');


    setErreurs(erreurs); // Update errors state immediately

    if (erreurs.length === 0) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, Password);
    auth.updateCurrentUser({
        displayName:nom,
        phoneNumber:telephone,
    })
        console.log('User created successfully:', userCredential.user);
        AsyncStorage.setItem('uid', auth.currentUser.uid);
        const docRef =  addDoc(collection(db, "Users"), {
             name:nom,
             pseudo:pseudo,
             tel:telephone,
             email:email,
             sexe:1,
             
          })
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <View style={styles.container}>
      <View style={styles.entete}>
        <Image source={require("../../../../assets/mbembeLOgo.png")} style={styles.image} />
      </View>
      <View style={styles.formulaire}>
        <TextInput
          style={styles.champ}
          placeholder="Nom complet"
          onChangeText={setNom}
        />
        <TextInput
          style={styles.champ}
          placeholder="Pseudo (optionnel)"
          onChangeText={setPseudo}
        />
        <TextInput
          style={styles.champ}
          placeholder="Adresse e-mail"
          onChangeText={setEmail}
          keyboardType='email'
          autoComplete='email'
        />
        <TextInput
          style={styles.champ}
          placeholder="Numéro de téléphone (optionnel)"
          onChangeText={setTelephone}
          keyboardType='tel'
        />
        <TextInput
          style={styles.champ}
          placeholder="Password"
          onChangeText={setPassword}
          keyboardType='password'
          secureTextEntry={true}

        />
        {/* Display validation errors below each input (optional) */}
        {erreurs.length > 0 && (
          <View style={styles.validation}>
            {erreurs.map((erreur) => (
              <Text key={erreur} style={styles.erreurTexte}>
                {erreur}
              </Text>
            ))}
          </View>
        )}
        <TouchableOpacity style={styles.Button} onPress={handleInscription}>
          <Text style={{ color: "#fff" }}>
            s'inscrire
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:PrimaryBGC,
      paddingTop:50
    },
    entete: {
    //   flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    formulaire: {
      flex: 2,
      alignItems: 'center',
      justifyContent:"center",
      gap:10,
      width:"80%",
      marginTop:"-35%"
    },
    validation: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    champ:{
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingVertical: 20,
        paddingHorizontal:10,
        borderRadius: 5,
        width:"100%",
        color:"#ddd"
    },
    image:{
        resizeMode:"contain",
        height:150,
        width:150
    },
    Button:{
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 80,
        borderRadius: 5,
     
        justifyContent:"center",
        alignContent:"center"
    }
   
  });
  
export default SignUp;
