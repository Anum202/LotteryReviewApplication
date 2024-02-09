import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';

const PrimaryButton = ({ onPress, logoSource, text, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Image source={logoSource} style={styles.logo} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};
export default PrimaryButton;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: Colors.bg5,
        paddingVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.02,
        width: windowWidth * 0.8,
        alignSelf: "center",
    },
    logo: {
        width: windowWidth * 0.06,
        height: windowHeight * 0.03,
        marginRight: windowWidth * 0.02,
    },
    text: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
});


