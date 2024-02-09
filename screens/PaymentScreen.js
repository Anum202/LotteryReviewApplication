import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';
import ProfileDataComponent from '../components/ProfileDataComponent';
import CheckboxComponent from '../components/CheckboxComponent';
import SecondaryButton from '../components/PrimaryButton';

const PaymentScreen = ({ navigation }) => {
    const [isCheckedPaypal, setIsCheckedPaypal] = useState(false);
    const [isCheckedOm, setIsCheckedOm] = useState(false);
    const [isCheckedMtn, setIsCheckedMtn] = useState(false);
    const [isCheckedApplePay, setIsCheckedApplePay] = useState(false);
    const [isCheckedGooglePay, setIsCheckedGooglePay] = useState(false);
    const [isCheckedAgreement, setIsCheckedAgreement] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/images/backBtn.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.headingTextStyles}>Payment</Text>
            </View>
            <Text style={styles.summaryHeadingTextStyles}>Credit & Debit Card</Text>
            <ProfileDataComponent
                leftIcon={require('../assets/images/visa.png')}
                text="3466 2362 2378 XXXX"
                rightIcon={require('../assets/images/expand-icon.png')}
                style={{ marginVertical: windowHeight * 0.01 }}
                styless={{ fontSize: 15, fontWeight: 'normal' }}
            />
            <ProfileDataComponent
                leftIcon={require('../assets/images/new-card.png')}
                text="Add New Card"
                rightIcon={require('../assets/images/expand-icon.png')}
                styless={{ fontSize: 15, fontWeight: 'normal' }}
            />
            <Text style={styles.summaryHeadingTextStyles}>More Payment Options</Text>
            <View style={styles.paymentContainer}>
                <View style={styles.paymentTypes}>
                    <Image
                        source={require('../assets/images/paypal.png')}
                        style={styles.imageStyles}
                    />
                    <Text style={styles.paymentText}>Paypal</Text>
                    <CheckboxComponent
                        isChecked={isCheckedPaypal}
                        onPress={() => setIsCheckedPaypal(!isCheckedPaypal)}
                    />
                </View>
                <View style={styles.line}></View>
                <View style={styles.paymentTypes}>
                    <Image
                        source={require('../assets/images/om.png')}
                        style={styles.imageStyles}
                    />
                    <Text style={styles.paymentText}>Orange Money</Text>
                    <CheckboxComponent
                        isChecked={isCheckedOm}
                        onPress={() => setIsCheckedOm(!isCheckedOm)}
                    />
                </View>
                <View style={styles.line}></View>
                <View style={styles.paymentTypes}>
                    <Image
                        source={require('../assets/images/mtn.png')}
                        style={styles.imageStyles}
                    />
                    <Text style={styles.paymentText}>MTN Money</Text>
                    <CheckboxComponent
                        isChecked={isCheckedMtn}
                        onPress={() => setIsCheckedMtn(!isCheckedMtn)}
                    />
                </View>
                <View style={styles.line}></View>
                <View style={styles.paymentTypes}>
                    <Image
                        source={require('../assets/images/apple-logo.png')}
                        style={styles.imageStyles}
                    />
                    <Text style={styles.paymentText}>Apple Pay</Text>
                    <CheckboxComponent
                        isChecked={isCheckedApplePay}
                        onPress={() => setIsCheckedApplePay(!isCheckedApplePay)}
                    />
                </View>
                <View style={styles.line}></View>
                <View style={styles.paymentTypes}>
                    <Image
                        source={require('../assets/images/google-logo.png')}
                        style={styles.imageStyles}
                    />
                    <Text style={styles.paymentText}>Google Pay</Text>
                    <CheckboxComponent
                        isChecked={isCheckedGooglePay}
                        onPress={() => setIsCheckedGooglePay(!isCheckedGooglePay)}
                    />
                </View>
            </View>
            <View style={styles.agreementContainer}>
                <CheckboxComponent
                    isChecked={isCheckedAgreement}
                    onPress={() => setIsCheckedAgreement(!isCheckedAgreement)}
                />
                <Text style={styles.textStyles}>I Accept </Text>
                <TouchableOpacity style={styles.termsContainer}>
                    <Text style={styles.termsText}>Terms & Conditions</Text>
                </TouchableOpacity>
                <Text style={styles.textStyles}> and </Text>
            </View>
            <TouchableOpacity style={[styles.termsContainer, { marginLeft: windowWidth * 0.13 }]}>
                <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableOpacity>
            <SecondaryButton
                text='Pay €1'
                style={{ backgroundColor: Colors.bg4, marginTop: windowHeight * 0.03 }}
            />
        </View >
    )
}
export default PaymentScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg1,
    },
    backBtnStyles: {
        padding: 15,
        backgroundColor: Colors.bg5,
        borderRadius: 20,
    },
    headingTextStyles: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: windowWidth * 0.04,
    },
    summaryHeadingTextStyles: {
        fontSize: 18,
        color: 'white',
        marginTop: windowHeight * 0.02,
        marginHorizontal: windowWidth * 0.06,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: windowHeight * 0.09,
    },
    paymentContainer: {
        backgroundColor: Colors.bg5,
        height: windowHeight * 0.36,
        width: windowWidth * 0.9,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: windowHeight * 0.01,
    },
    paymentTypes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageStyles: {
        marginLeft: windowWidth * 0.04,
        marginTop: windowHeight * 0.02,
    },
    paymentText: {
        marginTop: 10,
        marginRight: windowWidth * 0.3,
        fontSize: 16,
        color: 'white',
    },
    line: {
        backgroundColor: 'white',
        height: 1,
        opacity: 0.1,
        marginTop: windowHeight * 0.02,
        marginHorizontal: 10,
    },
    agreementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyles: {
        fontSize: 16,
        color: 'white',
        marginTop: windowHeight * 0.02,
    },
    termsText: {
        fontSize: 16,
        color: 'white',
        textDecorationLine: 'underline',
        marginTop: windowHeight * 0.02,

    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
