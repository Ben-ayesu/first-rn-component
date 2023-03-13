import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={LittleLemonHeaderStyles.headerContainer}>
      <Text style={LittleLemonHeaderStyles.headerText}>Little Lemon</Text>
    </View>
  );
}

const LittleLemonHeaderStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#EE9972'
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  }
})