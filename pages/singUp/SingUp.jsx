import {View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
import ButtonComplete from "../../components/shared/buttonComponent/ButtonComplete"
import reactImagePicker from "react-native-image-picker";
import { useState } from "react";
export default function SingUp() {

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
        const url = "http://192.168.1.3:3001/cadastro"
        axios.post(url, Postdata)
            .then((response)=> {
                console.log("resposta da api: ",response)
            })
            .catch((err)=>{
                console.error(err)
            })
    }
    return(
        <View>
            <Text>Cadastrar</Text>
            <TextInput placeholder="Nome" value={name} onChangeText={(text => setName(text))}/>
            <TextInput placeholder="Email" value={email} onChangeText={(text => setEmail(text))} />
            <TextInput placeholder="Senha" value={pass} onChangeText={(text => setPass(text))} />

            <Button title="Enviar" onPress={handleSingUp}/>
            <ButtonComplete text={"ola mundo"} onPress={handleSingUp}/>
        </View>
    )
}