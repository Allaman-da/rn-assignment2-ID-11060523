import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>My name is <Text style={styles.name}>Baffah Matilda</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 24, 
  },
  name: {
    fontWeight: 'bold', 
  },
});
