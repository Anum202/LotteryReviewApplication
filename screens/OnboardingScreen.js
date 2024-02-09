import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';
import PrimaryButton from '../components/PrimaryButton';

const OnboardingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundImageContainer}>
                <ImageBackground
                    source={require('../assets/images/bg.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../assets/images/logo.png')}
                            style={styles.logo}
                        />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.textWrapper}>
                <Text style={[styles.headingtextStyles, { marginTop: windowHeight * 0.04 }]}>Your Chance with</Text>
                <Text style={styles.headingtextStyles}>Just a <Image source={require('../assets/images/euro.png')} /> Euro</Text>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.summaryTextStyles}>1 Euro per ticket, no multiple tickets </Text>
            </View>
            <PrimaryButton
                style={{ marginVertical: windowHeight * 0.02 }}
                logoSource={require('../assets/images/google-logo.png')}
                text="CONTINUE WITH GOOGLE"
            />
            <PrimaryButton
                onPress={() => { }}
                logoSource={require('../assets/images/apple-logo.png')}
                text="CONTINUE WITH APPLE"
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.emailBtnStyles}>CONTINUE WITH EMAIL</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OnboardingScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg1,
    },
    backgroundImageContainer: {
        flex: 0.9,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: windowHeight * 0.1,
    },
    logo: {
        width: windowWidth * 0.7,
        height: windowWidth * 0.7,
    },
    textWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingtextStyles: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    summaryTextStyles: {
        fontSize: 16,
        color: 'white',
        marginVertical: windowHeight * 0.02,
    },
    emailBtnStyles: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: windowHeight * 0.03
    },
});
