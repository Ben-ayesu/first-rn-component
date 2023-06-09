import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={LittleLemonFooterStyles.footerContainer}>
      <Text style={LittleLemonFooterStyles.footerText}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}

const LittleLemonFooterStyles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#EE9972',
    marginBottom: 20
  },
  footerText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic'
  }
})