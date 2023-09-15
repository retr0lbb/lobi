import {ButtonArea, ButtonView, ButtonText} from './styles'


export default FlatButton = ({Text, onPress}) =>{
    return(
    <ButtonArea onPress={onPress}>
        <ButtonView>
            <ButtonText>{Text}</ButtonText>
        </ButtonView>
    </ButtonArea>
    )
}