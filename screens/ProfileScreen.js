import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';
import ProfileDataComponent from '../components/ProfileDataComponent';

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headingTextStyles}>Profile</Text>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/pencil.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.profileImageContainer}>
                    <Image
                        source={require('../assets/images/profile2.png')}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>
                <View style={styles.nameEmailContainer}>
                    <Text style={styles.nameText}>Peter Parker</Text>
                    <Text style={styles.emailText}>peter@gmail.com</Text>
                </View>
            </View>
            <ProfileDataComponent
                leftIcon={require('../assets/images/edit-profile.png')}
                text="Edit Personal Info"
                rightIcon={require('../assets/images/expand-icon.png')}
                style={{ marginVertical: windowHeight * 0.03 }}
            />
            <ProfileDataComponent
                leftIcon={require('../assets/images/change-pass.png')}
                text="Change Password"
                rightIcon={require('../assets/images/expand-icon.png')}
            />
            <ProfileDataComponent
                leftIcon={require('../assets/images/policy.png')}
                text="Policy"
                rightIcon={require('../assets/images/expand-icon.png')}
                style={{ marginVertical: windowHeight * 0.03 }}
            />
            <ProfileDataComponent
                leftIcon={require('../assets/images/settings.png')}
                text="Settings"
                rightIcon={require('../assets/images/expand-icon.png')}
            />
            <ProfileDataComponent
                leftIcon={require('../assets/images/delete-account.png')}
                text="Delete the account"
                rightIcon={require('../assets/images/expand-icon.png')}
                style={{ marginVertical: windowHeight * 0.03 }}
            />
            <ProfileDataComponent
                leftIcon={require('../assets/images/logout.png')}
                text="Logout"
                rightIcon={require('../assets/images/expand-icon.png')}
                styless={{ color: Colors.redShade }}
            />
        </ScrollView>
    )
}
export default ProfileScreen;

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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: windowHeight * 0.09,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    profileImageContainer: {
        borderRadius: 40,
        overflow: 'hidden',
    },
    profileImage: {
        width: 80,
        height: 80,
    },
    nameEmailContainer: {
        flex: 1,
        marginLeft: 20,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    emailText: {
        fontSize: 16,
        color: 'white'
    },
    btnStyles: {
        alignSelf: 'center',
        marginTop: windowHeight * 0.03,
    }
});