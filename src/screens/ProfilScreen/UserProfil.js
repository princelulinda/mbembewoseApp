import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import UploadImage from '../../components/uploadImage.component/UploadImage';

const UserProfile = () => {
    const [post,setPost] = useState([])
  const posts = [
    { id: '1', image: {uri:"https://picsum.photos/2/300"} },
    { id: '2', image: {uri:"https://picsum.photos/0/300"} },
    { id: '3', image: {uri:"https://picsum.photos/200/300"} },
  ];

  const renderItem = ({ item }) => (
    <View style={{flex:1, flexWrap:3}}>
        <Image source={item.image} style={styles.postImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
      <Image
        source={{uri:"https://picsum.photos/19/300"}}
        style={styles.profilePic}
      />
      <UploadImage/>
      </View>
      <Text style={styles.username}>Nom d'utilisateur</Text>
      <Text style={styles.bio}>Description de l'utilisateur ici...</Text>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>100</Text>
          <Text style={styles.statLabel}>Abonnés</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>200</Text>
          <Text style={styles.statLabel}>Abonnements</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>500</Text>
          <Text style={styles.statLabel}>Publications</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Publications</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.postsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  postsContainer: {
    marginBottom: 20,
  },
  postImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default UserProfile;
