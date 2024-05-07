import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const VideoArchiveScreen = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('https://api.vimeo.com/videos');
      const data = await response.json();
      setVideos(data.data);
    } catch (error) {
      console.error('Error fetching videos: ', error);
    }
  };

  const renderVideo = ({ item }) => {
    const { name, pictures, user } = item;
    return (
      <View style={styles.videoContainer}>
        <Image source={{ uri: pictures.sizes[3].link }} style={styles.thumbnail} />
        <View style={styles.metadataContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.channel}>{user.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderVideo}
        keyExtractor={(item) => item.uri}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  flatList: {
    flex: 1,
  },
  videoContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumbnail: {
    width: 160,
    height: 90,
  },
  metadataContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  channel: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default VideoArchiveScreen;
