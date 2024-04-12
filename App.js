import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import 'react-native-gesture-handler';
import AnimatedImage from './src/components/welcome.component/Welcome.component';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpWithEmail from './src/screens/AuthScreens/SignUp/SignUpWithEmail';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name=' ' component={SignUpWithEmail} options={
          {
            headerShown:false
          }
        }/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}



