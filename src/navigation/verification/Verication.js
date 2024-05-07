import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationStack from '../navigationStack/NavigationStack';
import BottomTab from '../bottomTab/BottomTab';


const Stack = createStackNavigator();
export default function Verication() {
    const [token, setToken] = useState(null);
    useEffect(() => {
      const getToken = async () => {
        const userToken = await AsyncStorage.getItem('uid');
        setToken(userToken);
      };
      
      getToken();
    }, []);
    if (!token) {
        return(
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name='NavigationStack' component={NavigationStack} options={{ headerShown: false }} />
             </Stack.Navigator>
          </NavigationContainer>
        )
        
    }else{
      return ( <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
            </Stack.Navigator>
      </NavigationContainer>)
    }
}