import React, { useState } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../shared/colors';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import BookingScreen from './src/screens/BookingScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
    const [user, setUser] = useState(null);

    if (!user) {
        return <LoginScreen onLogin={(u) => setUser(u)} />;
    }

    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: Colors.secondary },
                    headerTintColor: Colors.primary,
                    headerTitleStyle: { fontWeight: 'bold', fontFamily: 'Times New Roman' },
                    headerBackTitleVisible: false,
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Menu"
                    component={MenuScreen}
                    options={{ title: 'Our Services' }}
                />
                <Stack.Screen
                    name="Booking"
                    component={BookingScreen}
                    options={{ title: 'Inquiry' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});
