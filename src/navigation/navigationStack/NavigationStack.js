import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignUpWithEmail from '../../screens/AuthScreens/SignUp/SignUpWithEmail'
import Welcom from '../../components/welcome.component/Welcome.component'
import SignIn from '../../screens/AuthScreens/SignIn/SignIn'

const Stack = createStackNavigator()
export default function NavigationStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name=' ' component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name='welcom' component={Welcom} options={{headerShown:false}}/>
        <Stack.Screen name='SignUpWithEmail' component={SignUpWithEmail} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}