import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/Colors';
import OnboardingScreen from '../screens/OnboardingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PastDrawsScreen from '../screens/PastDrawsScreen';
import DrawResultsScreen from '../screens/DrawResultsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

//array for custom bottom tabs.
const tabs = [
    {
        name: 'HomeTabs',
        component: HomeScreen,
        source: require('../assets/images/home.png')
    },
    {
        name: 'PastDraws',
        component: PastDrawsScreen,
        source: require('../assets/images/lottery.png')
    },
    {
        name: 'DrawResults',
        component: DrawResultsScreen,
        source: require('../assets/images/ticket-bottom.png')
    },
    {
        name: 'Profile',
        component: ProfileScreen,
        source: require('../assets/images/user.png')
    },
];

//function for Tab Navigation
function TabNavigator() {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bg1 }}>
            <Tabs.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        const tab = tabs.find((tab) => tab.name === route.name);

                        return (
                            <View style={{
                                borderRadius: 30,
                                padding: 10,
                                backgroundColor: focused ? Colors.bg4 : 'transparent',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Image
                                    source={tab.source}
                                    style={{
                                        width: focused ? 25 : 25,
                                        height: focused ? 25 : 25,
                                        tintColor: focused ? 'white' : 'gray',
                                    }}
                                />
                            </View>
                        );
                    },
                    tabBarLabel: () => null,
                    tabBarStyle: {
                        display: 'flex',
                        height: 80,
                        borderRadius: 50,
                        backgroundColor: 'white',
                        marginBottom: 15,
                        marginHorizontal: 5,
                    },
                })}
            >
                {tabs.map((tab) => (
                    <Tabs.Screen key={tab.name} name={tab.name} component={tab.component} />
                ))}
            </Tabs.Navigator>
        </View>
    );
}

const AppNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Onboarding'>
                <Stack.Screen
                    name="Onboarding"
                    component={OnboardingScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Payment"
                    component={PaymentScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="PastDraws"
                    component={PastDrawsScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="DrawResults"
                    component={DrawResultsScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigation;
