import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Image, TouchableOpacity, Text } from 'react-native';
import { PrimaryBGC } from '../../../../assets/theme/theme';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from '../../../../services/Firebase.services/firebase.config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { AntDesign,Feather } from '@expo/vector-icons';
// import { CheckBox } from '@rneui/themed';

const SignUpWithEmail = () => {
  const [nom, setNom] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [erreurs, setErreurs] = useState("");
  const [viewPwd, setViempwd] = useState(false)
  const [check1, setCheck1] = useState(false);

  const handleInscription = async ({navigation}) => {
      console.log("click");
    if (!nom) setErreurs('Nom requis');
    // if (!validateEmail(email)) setErreurs('Email invalide'); 
    if (!email) setErreurs('Email requis');
    if (!Password) setErreurs('mot de passe requis');
    if (!erreurs) {
      try {
        console.log(erreurs);
        const userCredential = await createUserWithEmailAndPassword(auth, email, Password);
        AsyncStorage.setItem('uid', auth.currentUser.uid);
        const docRef =  setDoc(doc(collection(db, "Users"),`${auth.currentUser.uid}`), {
             name:nom,
             pseudo:pseudo,
             email:email,
             
          })
          navigation.navigate("BottomTab")
          getUsersData()
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }else{
      console.log(erreurs);
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <View style={styles.container}>
      <View style={styles.formulaire}>
        <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom:20 }}>
          Créer votre compte
        </Text>
        <View style={{width:"100%", gap:5}}>
          <Text style={styles.label}>Nom complet </Text>
          <TextInput
            style={styles.champ}
            placeholder="Nom complet"
            onChangeText={setNom}
          />
        </View>
        <View style={{width:"100%", gap:5}}>
          <Text style={styles.label}>Pseudo (optionnel)</Text>
          <TextInput
            style={styles.champ}
            placeholder="Pseudo (optionnel)"
            onChangeText={setPseudo}
          />
        </View>
        <View style={{width:"100%", gap:5}}>
          <Text style={styles.label}>Adresse e-mail</Text>
          <TextInput
            style={styles.champ}
            placeholder="Adresse e-mail"
            onChangeText={setEmail}
            keyboardType="email"
            autoComplete="email"
          />
        </View>
        <View style={{width:"100%", gap:5}}>
          <Text style={styles.label}>Password</Text>
          <View style={[styles.champ, {flexDirection:"row", alignItems:"center",justifyContent:"center"}]}>
          <TextInput style={{width:"100%", height:40, outline:"none"}}
            placeholder="Password"
            onChangeText={setPassword}
            keyboardType="visible-password"
            secureTextEntry={viewPwd?false:true}
          />
          <TouchableOpacity onPress={()=>setViempwd(!viewPwd)}>
          {viewPwd?<Feather name="eye-off" size={24} color="black" />:<AntDesign name="eyeo" size={24} color="black" />}
          </TouchableOpacity>
          </View>
        </View>
        {/* Display validation errors below each input (optional) */}
       
          <View style={styles.validation}>
              <Text style={styles.erreurTexte}>
                {erreurs}
              </Text>

          </View>
          {/* <CheckBox
      center
      title={<View>
        <Text>
          j'admis au <TouchableOpacity style={{color:PrimaryBGC}}>terme et condition</TouchableOpacity> 
        </Text>
      </View>}
      checked={check1}
      onPress={() => setCheck1(!check1)}
    /> */}
        <TouchableOpacity style={styles.Button} onPress={handleInscription}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 25 }}>
            s'inscrire
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection:"row", gap:5 }}>
    <Text>
    tu as un compte?
    </Text>
     <TouchableOpacity>
       <Text style={{color:PrimaryBGC, borderBottomColor:PrimaryBGC, borderBottomWidth:1}}>se connecter</Text>
      </TouchableOpacity> 
    </View>
      </View>
    
    </View>
  );
            }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    formulaire: {
      flex: 2,
      alignItems: 'center',
      justifyContent:"center",
      gap:10,
      width:"100%",
      padding:20
    },
    validation: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    champ:{
        height: 40,
      
        paddingVertical: 30,
        paddingHorizontal:10,
        borderRadius: 10,
        color:PrimaryBGC,
        width:"100%",
        backgroundColor:"#ddd"
    },
    image:{
        resizeMode:"contain",
        height:150,
        width:150
    },
    Button:{
        height: 40,
        backgroundColor: PrimaryBGC,
        paddingHorizontal: 80,
        borderRadius: 5,
        paddingVertical: 30,
        paddingHorizontal:10,
        width:"100%",
        justifyContent:"center",
        alignContent:"center"
    },
    erreurTexte:{
      color:"red"
    }
    
   
  });
  
export default SignUpWithEmail;
