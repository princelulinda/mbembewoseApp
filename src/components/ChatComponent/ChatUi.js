import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList,Pressable , Image } from 'react-native';
import UploadImage from '../../components/uploadImage.component/UploadImage';
import { Feather, Foundation, Ionicons } from '@expo/vector-icons';
import { FontAwesome,AntDesign } from '@expo/vector-icons';

const ChatUI = ({ user, initialMessages, chatHeaderStyle, messageContainerStyle, messageTextStyle, inputContainerStyle, textInputStyle, sendButtonStyle, userProfilStyle }) => {
  const [messages, setMessages] = useState(initialMessages || []);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    const curentMessage = {
      date: new Date().toISOString(),
      id: messages.length + 1,
      sender: user.name,
      message: newMessage,
    };
    setNewMessage("")
    setMessages([...messages, curentMessage]);
  };

  const renderMessage = ({ item }) => {
    return (
     <View>
        <View>
          <Text style={{textAlign:"center", margin:5}}>
            {item.date}
          </Text>
        </View>
       <View style={[styles.messageContainer, messageContainerStyle]}>
      
        <View style={item.status?item.sender === user.name? {display:"none"}:styles.statusIdicator:""}></View>
        <Image source={{ uri: item.sender === user.name ? "" : user.photo }} style={[styles.userProfil, userProfilStyle]} />
        <View style={item.sender === user.name ? styles.messagerCurrentUser : styles.messagerOtherUser}>
          <Text style={item.sender === user.name?{fontWeight:"bold", padding:5,color:"#fff"}:{fontWeight:"bold", padding:5}}>{item.sender}</Text>
          <Text style={item.sender === user.name? [styles.messageText, messageTextStyle,{color:"#fff"}]:[styles.messageText, messageTextStyle]}>{item.message}</Text>
        </View>
      </View>
     </View>
    );
  };

  return (
    <View style={[styles.container, chatHeaderStyle]}>
      <View style={[styles.chatHeader]}>
        <Image source={{ uri: user.photo }} style={[styles.userProfil, userProfilStyle]} />
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Feather name="video" size={34} color="black" />
          <Foundation name="telephone" size={34} color="black" />
        </View>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        style={[styles.messageList, messageContainerStyle]}
      />
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextInput
          style={[styles.textInput, textInputStyle]}
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          placeholder="Enter your message..."
        />
        <Pressable style={[styles.sendButton, sendButtonStyle]} onPress={sendMessage}>
          <Ionicons name="send-outline" size={24} color="black" />
        </Pressable>
        <UploadImage/>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
    backgroundColor: '#f5f5f5', 
  },
  chatHeader:{
    width:"100%",
    height:"10%",
    flexDirection:"row",
    backgroundColor:"#ddd",
    justifyContent:"center",
    padding:5,
    gap:"55%",
    alignItems:"center"
  },
  messageContainer: {
    flexDirection: "row",
    gap:5
  },
  messageList: {
    flex: 1,
    padding: 10,
  },
  messagerCurrentUser: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#0071d9', 
    width:"70%",
    marginLeft:"10%",
   borderRadius:10,
    borderBottomEndRadius:0,
  },
  messagerOtherUser: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ddd', 
    borderRadius: 10,
    justifyContent: "flex-start",
    borderTopStartRadius:0,
    
  },
  messageText: {
    fontSize: 17,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  sendButton: {
    padding: 10,
    borderRadius: 5,
  },
  userProfil: {
    width: 50,
    height: 50,
    borderRadius: 50,

  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  statusIdicator:{width:15,
    height:15,
     borderRadius:50,
      backgroundColor:"green",
     position:"absolute",
      zIndex:10,
      shadowColor:"#fff",
      shadowOpacity:0.2}
});


export default ChatUI;
