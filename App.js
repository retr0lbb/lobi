import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Login from './pages/login/Login';
import SingUp from './pages/singUp/SingUp'
import Home from './pages/home/Home';

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name="cadastro" component={SingUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
