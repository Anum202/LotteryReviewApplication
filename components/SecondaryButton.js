import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';

const SecondaryButton = ({ onPress, text, style, styless }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, styless]}>{text}</Text>
        </TouchableOpacity>
    );
};
export default SecondaryButton;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: Colors.bg4,
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.02,
        width: windowWidth * 0.9,
        alignSelf: "center",
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});


