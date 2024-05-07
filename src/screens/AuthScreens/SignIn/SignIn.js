import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React,{useState} from 'react'
import { PrimaryBGC } from '../../../../assets/theme/theme';
import { CheckBox } from 'react-native-web';
import {AntDesign,Feather} from "@expo/vector-icons"
import { auth } from '../../../../services/Firebase.services/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserDataFetcher from '../../../../services/getUserdata/getUserdata';

export default function SignIn({navigation}) {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [erreurs, setErreurs] = useState([]);
    const [viewPwd, setViempwd] = useState(false)
    const [check1, setCheck1] = useState(false);
    const [submit, setSubmit] = useState(false)


    const handleSignIn = async () => {
          try {
            const userCredential = await signInWithEmailAndPassword(auth, email, Password);
            AsyncStorage.setItem('uid', auth.currentUser.uid);
            // navigation.navigate("BottomTab")
           setSubmit(true)
          } catch (error) {
            console.error('Error creating user:', error);
          }
      };
    

    return (
        <View style={styles.container}>
          <View style={styles.formulaire}>
            <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom:20 }}>
              Se connecter
            </Text>
          {submit? <UserDataFetcher/>:""}
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
              <Pressable onPress={()=>setViempwd(!viewPwd)}>
              {viewPwd?<Feather name="eye-off" size={24} color="black" />:<AntDesign name="eyeo" size={24} color="black" />}
              </Pressable>
              </View>
            </View>
            {/* Display validation errors below each input (optional) */}
           
             <View style={styles.validation}>
                  <Text style={styles.erreurTexte}>
                    {erreurs}
                  </Text>
    
              </View>
              <CheckBox
          center
          title={<View>
            <Text>
              j'admis au <Pressable style={{color:PrimaryBGC}}>terme et condition</Pressable> 
            </Text>
          </View>}
          checked={check1}
          onPress={() => setCheck1(!check1)}
        />
            <Pressable style={styles.Button} onPress={handleSignIn }>
              <Text style={{ color: "#fff", textAlign: "center", fontSize: 25 }}>
                se connecter
              </Text>
            </Pressable>
            <View style={{ flexDirection:"row", gap:5 }}>
        <Text>
        tu n'as compte?
        </Text>
         <Pressable onPress={()=>navigation.navigate("SignUpWithEmail")}>
           <Text style={{color:PrimaryBGC, borderBottomColor:PrimaryBGC, borderBottomWidth:1}}>s'inscrire</Text>
          </Pressable> 
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

    