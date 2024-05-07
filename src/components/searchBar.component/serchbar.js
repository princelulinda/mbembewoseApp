import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { secondaryColor } from '../../../assets/theme/theme';

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = () => {
    setSearchText(searchText);
    onSearch(searchText);
  };

  return (
    <View style={styles.searchBarContainer}>
      <MaterialCommunityIcons name="magnify" size={24} color={secondaryColor} style={styles.searchIcon} /> 
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        onChangeText={handleSearchChange}
        value={searchText}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,

  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding:7,
  },
});

export default SearchBar;