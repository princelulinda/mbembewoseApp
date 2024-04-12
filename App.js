import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import 'react-native-gesture-handler';
import AnimatedImage from './src/components/welcome.component/Welcome.component';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/screens/AuthScreens/SignUp/SignUp';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name=' ' component={AnimatedImage} options={
          {
            headerShown:false
          }
        }/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}



