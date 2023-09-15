import styled from "styled-components/native";


export const ButtonArea = styled.TouchableOpacity`
    width: 40%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:10px;
    flex:1
    `


export const ButtonView = styled.View`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 5%;
`

export const ButtonText = styled.Text`
        width: 100%;
        height: 100%;
        text-align: center;
        color: black;
        text-decoration: none;
`