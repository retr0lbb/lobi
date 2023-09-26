import {View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react"
import { Container, Inputs, LogsButton, ButtonsWrapper, NewBottons } from "./style";
import axios from "axios"
import ButtonComplete from "../../components/shared/buttonComponent/ButtonComplete"



export default function Login({navigation}){

    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');


    function handleLogin(){

        if(pass == "" || email ==""){
            return console.log("insira os dados corretamente")
        }
        console.log(pass, email);

        try {
            axios.post("http://192.168.1.7:3001/login/", {email, pass}).then(response => {
                const status = response.status;
                const responseData = response.data;
                const userId = responseData.userData.id;
                if(status === 200){
                    alert("login bem sucedido");
                    navigation.navigate("main_page", userId);
                }
            }).catch(err =>{
                if(err){
                    console.log(err);
                    alert("Senha ou email incorreta");
                }
            })
        } catch (error) {
            if (error){
                alert("ocorreu um erro no login");
                console.error(error);
                return;
            }
        }
        setEmail("");
        setPass("");
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
                <ButtonComplete text="Voltar" onPress={() => navigation.navigate("home")}/>
                <ButtonComplete text="Entrar" onPress={handleLogin}/>
            </ButtonsWrapper>
        </Container>
    )
}