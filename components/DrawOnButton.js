import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const DrawOnButton = ({ onPress, text, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};
export default DrawOnButton;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 0.3,
        borderColor: 'white',
        paddingVertical: windowHeight * 0.01,
        paddingHorizontal: windowWidth * 0.02,
        marginTop: windowHeight * 0.02,
        width: windowWidth * 0.8,
        alignSelf: "center",
    },
    text: {
        fontSize: 16,
        color: 'white',
    },
});


