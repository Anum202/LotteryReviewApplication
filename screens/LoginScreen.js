import React, { useState } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';

import Colors from '../constants/Colors';
import TextInputComponent from '../components/TextInputComponent';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const LoginScreen = ({ navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePass] = useState('');
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
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
                <Text style={styles.headingTextStyles}>LOGIN</Text>

                <View style={styles.inputContainer}>
                    <TextInputComponent
                        iconType='MaterialIcons'
                        iconName="email"
                        placeholder='Email'
                        placeholderTextColor='#cccc'
                        value={email}
                        onChangeText={onChangeEmail}
                        keyboardType='email-address'
                        autoCapitalize="none"
                        secureTextEntry={false}
                        style={[styles.inputField, { textAlign: 'left' }]}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInputComponent
                        iconType='AntDesign'
                        iconName="lock"
                        placeholder='Password'
                        placeholderTextColor='#cccc'
                        value={password}
                        onChangeText={onChangePass}
                        keyboardType='default'
                        autoCapitalize="sentences"
                        secureTextEntry={true}
                        style={[styles.inputField, { textAlign: 'left' }]}
                    />
                </View>
                <SecondaryButton
                    onPress={() => navigation.navigate('Home')}
                    text="Login"
                    style={{ marginVertical: windowHeight * 0.02 }}
                />
                <TouchableOpacity>
                    <Text style={styles.forgetTextStyles}>Forgot Password ?</Text>
                </TouchableOpacity>
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
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.bottomText}>Don't have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText}>REGISTER NOW</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}
export default LoginScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg1,
    },
    backgroundImageContainer: {
        flex: 0.8,
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
        width: windowWidth * 0.6,
        height: windowWidth * 0.6,
    },
    headingTextStyles: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    },
    inputContainer: {
        marginVertical: windowHeight * 0.01,
        paddingHorizontal: windowWidth * 0.05,
    },
    inputField: {
        width: '100%',
        backgroundColor: 'white'
    },
    forgetTextStyles: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight * 0.02,
    },
    bottomText: {
        marginRight: 5,
        fontSize: 14,
        color: '#FFF',
    },
    registerText: {
        color: '#FFF',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
});