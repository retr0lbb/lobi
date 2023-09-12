import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Login from './pages/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Login></Login>
    </View>
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
