import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: .05, backgroundColor: '#F4CE14', padding: 40 }}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
