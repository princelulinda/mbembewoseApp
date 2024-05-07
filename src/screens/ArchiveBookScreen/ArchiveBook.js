import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ArchiveBookScreen= () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=react%20native');
      const data = await response.json();
      setDocuments(data.items);
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  };

  const renderDocument = ({ item }) => {
    const { volumeInfo } = item;
    return (
      <View style={styles.documentContainer}>
        <Image source={{ uri: volumeInfo.imageLinks.thumbnail }} style={styles.coverImage} />
        <View style={styles.metadataContainer}>
          <Text style={styles.title}>{volumeInfo.title}</Text>
          <Text style={styles.author}>By {volumeInfo.authors.join(', ')}</Text>
          <Text style={styles.description}>{volumeInfo.description.slice(0,300)}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={documents}
        renderItem={renderDocument}
        keyExtractor={(item) => item.id}
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
  documentContainer: {
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
  coverImage: {
    width: 100,
    height: 150,
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
  author: {
    fontSize: 14,
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
  },
});

export default ArchiveBookScreen;
