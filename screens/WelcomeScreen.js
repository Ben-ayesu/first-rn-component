import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ScrollView style={welcomeScreenStyles.container}>
            <Text style={welcomeScreenStyles.welcomeContainer}> Welcome to the Little Lemon</Text>
            <Text style={welcomeScreenStyles.descriptionContainer}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment.
                We would love to hear more about your experience with us!
            </Text>
        </ScrollView>
    )
}

const welcomeScreenStyles = StyleSheet.create({
    container: {
        indicatorStyle: "white",
        flex: 1
    },
    welcomeContainer: {
        padding: 40,
        fontSize: 50,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    descriptionContainer: {
        fontSize: 38,
        color: '#EDEFEE',
        textAlign: 'center',
        padding: 20,
        marginVertical: 8
    }
})