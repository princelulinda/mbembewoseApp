import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AudioPlayer from '../AudioPlayerScreen/AudioPlayer';

const AudioArchiveScreen = () => {
  const [audioData, setAudioData] = useState([]);

  useEffect(() => {
    fetchAudioData();
  }, []);

  const fetchAudioData = async () => {
    try {
      const response = await fetch('https://freesound.org/apiv2/search/text/?query=songs&token=QOBdEnrTepWsTK8VeHKBBgCq3ZZXMVJKySMpiPNG');
      const data = await response.json();
      setAudioData(data.results);
    } catch (error) {
      console.error('Error fetching audio data: ', error);
    }
  };

  const renderAudioItem = ({ item }) => (
    <View style={styles.audioItem}>
      <Text style={styles.audioTitle}>{item.name}</Text>
      <Text style={styles.audioMetadata}>Créateur: {item.username}</Text>
      <Text style={styles.audioMetadata}>Durée: {item.duration}</Text>
      <View style={{marginTop:20}}>
      <AudioPlayer/>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Fichiers Audio</Text> */}
      <FlatList
        data={audioData}
        renderItem={renderAudioItem}
        keyExtractor={item => item.id.toString()}
        style={styles.audioList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  audioList: {
    flex: 1,
  },
  audioItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  audioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  audioMetadata: {
    fontSize: 14,
  },
});

export default AudioArchiveScreen;
