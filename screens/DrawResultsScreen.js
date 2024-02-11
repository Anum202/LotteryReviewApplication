import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';

const DrawResultsScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.bodyContainer}>
                <Text style={styles.headingTextStyles}>Winner!</Text>
                <View style={styles.contentContainer}>
                    <Image
                        source={require('../assets/images/winnerHat.png')}
                        style={styles.winnerHat}
                    />
                    <Image
                        source={require('../assets/images/winner.png')}
                        style={styles.image}
                    />
                    <View style={styles.textWrapper}>
                        <Text style={styles.winnerText}>Alex John</Text>
                        <Text style={styles.prizeText}>Air Pods</Text>
                    </View>

                </View>
                <Image
                    source={require('../assets/images/airpods.png')}
                    style={{ alignSelf: 'center', marginTop: windowHeight * 0.01 }}
                />
            </View>
        </ScrollView>
    )
}
export default DrawResultsScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.bg1,
    },
    bodyContainer: {
        backgroundColor: Colors.bg3,
        height: windowHeight * 0.75,
        width: windowWidth * 0.9,
        borderColor: Colors.bg3,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: windowHeight * 0.1,
        justifyContent: 'center',
    },
    headingTextStyles: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        position: 'relative',
    },
    textWrapper: {
        marginTop: -windowHeight * 0.07,
    },
    winnerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    },
    prizeText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },
    winnerHat: {
        position: 'absolute',
        top: 60,
        width: windowWidth * 0.2,
        height: windowHeight * 0.1,
        zIndex: 1,
    },
    image: {
        width: windowWidth * 0.5,
        height: windowHeight * 0.5,
        zIndex: 1,
    },
});
