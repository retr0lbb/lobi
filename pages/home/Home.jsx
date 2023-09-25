import React from "react"
import {View, Button, Text} from "react-native"
import ButtonComplete from "../../components/shared/buttonComponent/ButtonComplete"
import {Container, ButtonsWapper} from "./styles"

export default function Home({navigation}){
    return(
        <Container>
        <Text>HOME</Text>
        <ButtonsWapper>
        <ButtonComplete text={"Entrar"} onPress={() => navigation.navigate("login")}/>
        <ButtonComplete text={"Cadastrar"} onPress={() => navigation.navigate("cadastro")}/>
        </ButtonsWapper>
        </Container>

    )
}