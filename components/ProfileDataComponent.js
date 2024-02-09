import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';

const ProfileDataComponent = ({ leftIcon, text, rightIcon, style, styless }) => {
    return (
        <TouchableOpacity style={[styles.container, style]}>
            <View style={styles.leftContainer}>
                <Image source={leftIcon} />
            </View>
            <Text style={[styles.text, styless]}>{text}</Text>
            <TouchableOpacity style={styles.rightContainer}>
                <Image source={rightIcon} style={styles.icon} />
            </TouchableOpacity>
        </TouchableOpacity >
    );
};
export default ProfileDataComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.bg5,
        width: windowWidth * 0.9,
        paddingHorizontal: windowWidth * 0.05,
        paddingVertical: windowHeight * 0.02,
        borderRadius: 20,
        alignSelf: 'center',
    },
    leftContainer: {
        marginRight: windowWidth * 0.02,
    },
    rightContainer: {
        marginLeft: 'auto',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: windowWidth * 0.02,
    },
});


