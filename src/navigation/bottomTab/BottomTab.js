import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import Home from '../../screens/HomeScreen/Home.Screen';
import UserProfile from '../../screens/ProfilScreen/UserProfil';
import CreatePost from '../../screens/CreatePostScreen/CreatePost';
import { StyleSheet, View } from 'react-native';
import { PrimaryBGC } from '../../../assets/theme/theme';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor:PrimaryBGC,
          tabBarActiveTintColor:"#757575",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'createPost') {
              return (
                <View style={styles.button}>
                  <Feather name='plus' size={24} style={styles.textButton} />
                </View>
              );
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons color={color} name={iconName} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false,  }} />
        <Tab.Screen name="createPost" component={CreatePost} />
        <Tab.Screen name="Profile" component={UserProfile} />
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    backgroundColor: PrimaryBGC,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
  },
});
