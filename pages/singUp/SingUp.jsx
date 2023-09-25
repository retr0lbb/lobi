import {View, Text, TextInput, Button, StyleSheet } from "react-native";
import {Container, Input, ButtonView} from "./style"
import axios from "axios";
import ButtonComplete from "../../components/shared/buttonComponent/ButtonComplete"
import reactImagePicker from "react-native-image-picker";
import { useState } from "react";


export default function SingUp({navigation}) {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [pass, setPass] = useState("");
    const handleSingUp = ()=>{
        if(name ==""|| email =="" || pass==""){
            return console.log("Insira informações corretamente")
        }
        const Postdata = {
            name: name,
            email: email,
            pass: pass
        }
        const url = "http://192.168.1.3:3001/cadastro";
        axios.post(url, Postdata)
            .then((response)=> {
                console.log("resposta da api: ",response)
            })
            .catch((err)=>{
                console.error(err)
            })

            setEmail("");
            setName("");
            setPass("");
    }
    return(
        <Container>
            <Text>Cadastrar</Text>
            <Input placeholder="Nome" value={name} onChangeText={(text => setName(text))}/>
            <Input placeholder="Email" value={email} onChangeText={(text => setEmail(text))} />
            <Input placeholder="Senha" value={pass} onChangeText={(text => setPass(text))} />
            <ButtonView>
            <ButtonComplete text={"Voltar"} onPress={() => navigation.navigate("home")}/>
            <ButtonComplete text={"Enviar"} onPress={handleSingUp}/>
            </ButtonView>
        </Container>
    )
}