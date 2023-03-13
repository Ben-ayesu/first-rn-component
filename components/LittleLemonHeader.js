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
    backgroundColor: '#F4CE14',
    flex: .05,
    padding: 40
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  }
})