import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';

const PrizeComponent = ({ raffleId, ticketNo, amount, prizeWon }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bodyContainer}>
                <View style={styles.rowWrapper}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.headingText}>Bumper Prizes</Text>
                        <Text style={styles.summaryText}>Draw on: 24 January 2023</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={require('../assets/images/bumper-prize.png')}
                            style={styles.image}
                        />
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.rowWrapper}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.miniHeading}>Raffle ID</Text>
                        <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>{raffleId}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.miniHeading}>Ticket Number</Text>
                        <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>{ticketNo}</Text>
                    </View>
                </View>

                <View style={styles.rowWrapper}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.miniHeading}>Amount</Text>
                        <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>{amount}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.miniHeading}>Prize Won</Text>
                        <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>{prizeWon}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}
export default PrizeComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg1,
    },
    bodyContainer: {
        marginTop: windowHeight * 0.04,
        alignSelf: 'center',
        height: windowHeight * 0.3,
        width: windowWidth * 0.9,
        borderRadius: 20,
        backgroundColor: Colors.bg5,
        marginBottom: windowHeight * 0.01,
    },
    rowWrapper: {
        flexDirection: 'row',
    },
    rowContainer: {
        marginTop: windowHeight * 0.02,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    summaryText: {
        fontSize: 16,
        color: 'white',
    },
    miniHeading: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    line: {
        backgroundColor: 'white',
        height: 1,
        marginTop: 10,
        marginHorizontal: 10,
        opacity: 0.2,
    },
});