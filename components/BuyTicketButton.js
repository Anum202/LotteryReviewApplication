import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const BuyTicketButton = ({ onPress, text, logoSource, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={styles.text}>{text}</Text>
            <Image source={logoSource} style={styles.logo} />
        </TouchableOpacity>
    );
};
export default BuyTicketButton;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'white',
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.02,
        width: windowWidth * 0.8,
        alignSelf: "center",
    },
    logo: {
        width: windowWidth * 0.07,
        height: windowHeight * 0.04,
        marginLeft: windowWidth * 0.04,
    },
    text: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
});


