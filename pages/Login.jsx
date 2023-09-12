import {View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState} from "react"
import { Container } from "./style";


export default function Login(){

    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');


    function handleLogin(){

        if(pass == "" || email ==""){
            return console.log("insira os dados corretamente")
        }
        console.log(pass, email)
        setEmail('')
        setPass("")
    }
    return(
        <Container>
            <TextInput keyboardType="email-address" 
                       autoCapitalize="none"
                       style={styles.input} 
                       onChangeText={
                            (text) => setEmail(text)
                        } 
                        value={email}
                        placeholder="Email"/>
            <TextInput placeholder="Senha" 
                       style={styles.input} 
                       onChangeText={(text)=> setPass(text)} 
                       value={pass} 
                       secureTextEntry/>

            <Button title="Login" onPress={handleLogin} />
        </Container>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      label: {
        fontSize: 16,
        marginBottom: 8,
      },
      input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
      },

})