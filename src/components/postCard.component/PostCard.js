import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign,FontAwesome} from '@expo/vector-icons'; 

const PostCard = () => {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  return (
    <View style={styles.card}>
        <View style={styles.profil}>
           <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.avatar}/>
            <View>
                <Text style={styles.title}>
                    prince lulinda
                </Text>
                <Text>
                    Admin
                </Text>
                <Text>
                    il ya 6 minute
                </Text>
           </View>
        </View>
         <Text style={styles.title}>Title of the post</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui id elit aliquet iaculis.</Text>
      <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />
      <View style={styles.content}>
       
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
          <AntDesign name="like2" size={24} color="black" />
            <Text style={styles.actionText}>Like ({liked ? comments + 1 : comments})</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleComment}>
          <FontAwesome name="comment-o" size={24} color="black" />
            <Text style={styles.actionText}>Comment ({comments})</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
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
  actionIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  actionText: {
    fontSize: 14,
  },
  profil:{
    flexDirection:"row",
    gap:20,
    marginBottom:30
  },
  avatar:{
    width:60,
    height:60,
    borderRadius:50,
  }
});

export default PostCard;
