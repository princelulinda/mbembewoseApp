import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import { collection, onSnapshot, query, orderBy, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../services/Firebase.services/firebase.config';
import GetImagesTostorage from '../../../services/getImagesTostorage/getImagesTostorage';

const PostCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'Posts'), orderBy('date', "desc")); 
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedPosts = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setPosts(updatedPosts);
    });
    return () => unsubscribe();
  }, []);

  const handleLike = async (postId, currentLikes, liked) => {
    try {
      const postRef = doc(db, 'Posts', postId);
      let updatedLikes;
      if (!liked) {
        updatedLikes = currentLikes + 1; // Incrémente le nombre de likes
      } else {
        updatedLikes = currentLikes - 1; // Décrémente le nombre de likes
      }
      await updateDoc(postRef, { likes: updatedLikes });
    } catch (error) {
      console.error("Erreur lors du like du post :", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.profil}>
        <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.avatar}/>
        <View>
          <Text style={styles.title}>{item.author.name} {item.author.pseudo}</Text>
          <Text>{`${item.date}`}</Text>
        </View>
      </View>
      <Text style={styles.title}>Title of the post</Text>
      <Text style={styles.description}>{item.content}</Text>
      <GetImagesTostorage imageName={item.fileName}/>
      <View style={styles.content}>
        <View style={styles.actions}>
          <Pressable style={styles.actionButton} onPress={() => handleLike(item.id, item.likes || 0, item.liked || false)}>
            <AntDesign name="like2" size={24} color={item.liked ? "blue" : "black"} />
            <Text style={styles.actionText}>Like ({item.likes || 0})</Text>
          </Pressable>
          <Pressable style={styles.actionButton} onPress={() => handleComment()}>
            <FontAwesome name="comment-o" size={24} color="black" />
            <Text style={styles.actionText}>Comment ({item.comments || 0})</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    marginTop: 15
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 7,
  },
  content: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
  },
  profil: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 30
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  }
});

export default PostCard;
