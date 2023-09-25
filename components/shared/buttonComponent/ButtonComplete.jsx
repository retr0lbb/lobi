import React from "react"

import {TouchableOpacity, Text, StyleSheet} from "react-native"
import {OpacityScreen, ButtonText} from "./styles";

export default function ButtonComplete({text, onPress}){

    return(
        <OpacityScreen onPress={onPress}>
            <ButtonText>{text}</ButtonText>
        </OpacityScreen>
    );
}