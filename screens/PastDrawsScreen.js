import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';
import PrizeComponent from '../components/PrizeComponent';

const PastDrawsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headingTextStyles}>Past Draws</Text>
            </View>
            <PrizeComponent raffleId='L4564' ticketNo='AKIHU39849' amount='€1' prizeWon='Digital Card' />
            <PrizeComponent raffleId='L4564' ticketNo='AKIHU39849' amount='€1' prizeWon='-' />
            <PrizeComponent raffleId='L4564' ticketNo='AKIHU39849' amount='€1' prizeWon='Digital Card' />
            <PrizeComponent raffleId='L4564' ticketNo='AKIHU39849' amount='€1' prizeWon='-' />
            <PrizeComponent raffleId='L4564' ticketNo='AKIHU39849' amount='€1' prizeWon='Digital Card' />
        </ScrollView>
    )
}
export default PastDrawsScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.bg1,
    },
    headingTextStyles: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: windowHeight * 0.09,
    },
});