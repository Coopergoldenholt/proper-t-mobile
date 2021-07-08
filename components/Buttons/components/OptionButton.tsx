import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { BrightText, Colors } from '../../../styles'

interface IProps {
    id: string | number;
    text: string;
    pressed: boolean;
    onPress: any;
}

const OptionButton = (props: IProps) => {
    return <TouchableOpacity style={props.pressed ? styles.pressedButton : styles.unPressedButton} onPress={() => props.onPress(props.id)}>
        <BrightText style={{ color: Colors.white, fontSize: 16 }}>{props.text}</BrightText>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    pressedButton: {
        backgroundColor: Colors.secondaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        width: 100
    },
    unPressedButton: {
        width: 100,
        backgroundColor: Colors.disabledColor,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    }
})

export default OptionButton

