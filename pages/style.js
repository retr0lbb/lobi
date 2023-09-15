import styled from "styled-components/native";

export const Container = styled.View`

    width: 100%;
    height: 20vh;
    display: flex;
    align-itens: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
`;

export const Inputs = styled.TextInput`
    width: 100%;
    height: 40px;
    border-color: gray;
    border-width: 1px;
    margin-bottom: 16px;
    padding: 8px;
`;

export const LogsButton = styled.Button`
    width: 100%;
    height: 20px;
    background-color: yellow;
`

export const NewBottons = styled.Button`
    width: 100%;
    height: 20px;
    background-color: yellow;
`

export const ButtonsWrapper = styled.View`
    width: 100%;
    background-color: coral;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    gap: 20px
`