import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Login from './pages/login/Login';
import SingUp from './pages/singUp/SingUp'

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name="cadastro" component={SingUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: "100px",
    paddingTop:"200px",
    display: 'flex',
    alignItems: "center",
    justifyContent:"center",
    flex: 1, // Use flex: 1 para preencher toda a tela
  },
});
