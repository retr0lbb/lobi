import {Text} from "react-native"
import axios from "axios"

export default function MainPage({route}){

    const userId = route.params
    return(
        <Text>Hello Motto: {userId}</Text>
    )
}