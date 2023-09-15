import {View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState} from "react"
import { Container, Inputs, LogsButton, ButtonsWrapper, NewBottons } from "./style";
import FlatButton from "../components/utils/button/Button"


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
            <Inputs keyboardType="email-address" 
                       autoCapitalize="none"
                       onChangeText={(text) => setEmail(text)} 
                        value={email}
                        placeholder="Email"/>
            <Inputs placeholder="Senha" 
                       onChangeText={(text)=> setPass(text)} 
                       value={pass} 
                       secureTextEntry/>


            <ButtonsWrapper>
                <FlatButton Text="Logar" onPress={handleLogin}/>
                <FlatButton Text="Cadastro" onPress={handleLogin}/>
            </ButtonsWrapper>
        </Container>
    )
}