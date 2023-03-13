import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

// Import Components
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/LittleLemonFooter';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={littleLemonAppStyles.headerAndScreenContainer}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={littleLemonAppStyles.footerContainer}>
        <Footer />
      </View>
    </>
  );
}

const littleLemonAppStyles = {
  headerAndScreenContainer: {
    flex: 1,
    backgroundColor: '#333333'
  },
  footerContainer: {
    backgroundColor: '#333333'
  }
}
