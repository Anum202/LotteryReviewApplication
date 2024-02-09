import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';
import PrizeComponent from '../components/PrizeComponent';
import DrawOnButton from '../components/DrawOnButton';
import BuyTicketButton from '../components/BuyTicketButton';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>

                <View style={styles.greetingContainer}>
                    <Text style={styles.greetingText}>Hello, Peter</Text>
                    <Text style={styles.goodLuckText}>Good Luck!</Text>
                </View>
                <TouchableOpacity style={styles.bellContainer}>
                    <Image
                        source={require('../assets/images/bell.png')}
                        style={styles.bellIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.headingTextStyles}>Buy a lottery ticket of</Text>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                />
                <DrawOnButton
                    text="Draw on: 24 Jan, 2023 6PM onwards"
                />
                <BuyTicketButton
                    onPress={() => navigation.navigate('Payment')}
                    text="Buy Ticket for €1"
                    logoSource={require('../assets/images/ticket.png')}
                    style={{ marginTop: windowHeight * 0.02 }}
                />
            </View>
            <PrizeComponent raffleId='L4564' ticketNo='AKIHU39849' amount='€1' prizeWon='Digital Card' />
            <PrizeComponent raffleId='L4564' ticketNo='AKIHU39849' amount='€1' prizeWon='Digital Card' />
            <PrizeComponent raffleId='L4564' ticketNo='AKIHU39849' amount='€1' prizeWon='Digital Card' />
        </ScrollView>
    )
}
export default HomeScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.bg1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: windowHeight * 0.09,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    bellContainer: {
        backgroundColor: '#2E2646',
        borderRadius: 30,
        padding: 15,
        alignSelf: 'flex-end',
        marginHorizontal: windowHeight * 0.15,
    },
    bellIcon: {
        width: windowWidth * 0.04,
        height: windowWidth * 0.04,
    },
    greetingContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: windowHeight * 0.03,
    },
    greetingText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    goodLuckText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    bodyContainer: {
        backgroundColor: Colors.bg4,
        height: windowHeight * 0.5,
        width: windowWidth * 0.9,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: windowHeight * 0.03,
    },
    headingTextStyles: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginTop: windowHeight * 0.02,
    },
    logo: {
        width: windowWidth * 0.4,
        height: windowWidth * 0.4,
        alignSelf: 'center',
        marginTop: 20,
    },
});