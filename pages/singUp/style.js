import styled from "styled-components/native"

export const Container = styled.View`
flex: 1;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
padding: 20px;
`
export const Input = styled.TextInput`
    width: 100%;
    height: 40px;
    border-color: black;
    border-width: 1px;
    padding: 8px;
    border-radius: 10px;
`;
export const ButtonView = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;