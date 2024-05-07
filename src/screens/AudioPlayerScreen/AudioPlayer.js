import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { PrimaryBGC } from '../../../assets/theme/theme';
// import Slider from '@react-native-community/slider';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const onAudioProgress = (data) => {
    setCurrentTime(data.currentTime);
    setTotalDuration(data.duration);
  };

  const onSlidingComplete = (value) => {
    audioRef.current.seek(value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={togglePlayPause} style={styles.playButton}>
        <AntDesign name={isPlaying ? 'pause' : 'play'} size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.progressBar}>
        {/* <Slider
          style={{ flex: 1 }}
          minimumValue={0}
          maximumValue={totalDuration}
          value={currentTime}
          minimumTrackTintColor="#2979FF"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#2979FF"
          onSlidingComplete={onSlidingComplete}
          disabled={!isPlaying}
        /> */}
      </View>
      <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
      <Text style={styles.timeText}>{formatTime(totalDuration)}</Text>
    </View>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  playButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: PrimaryBGC,
    borderRadius: 25,
  },
  progressBar: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  timeText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default AudioPlayer;
