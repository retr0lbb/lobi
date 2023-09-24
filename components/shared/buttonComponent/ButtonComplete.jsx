import React from "react"

import {TouchableOpacity, Text, StyleSheet} from "react-native"

export default function ButtonComplete({text, onPress}){

    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button:{
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        alignItems: "center"
    },
    text:{
        color: 'white', // Customize text style
        fontSize: 16,
        fontWeight: 'bold',
    }
})