import * as React from 'react';
import { View } from 'react-native';

// Import Components
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/LittleLemonFooter';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View
        style={{ backgroundColor: '#495E57' }}>
        <Footer />
      </View>
    </>
  );
}