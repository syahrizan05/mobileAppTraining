import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama saya Syahrizan Ali Hassan</Text>
      <Text>Saya suka React Native</Text>
      <Text>React Native sangat mudah</Text>
      <Text>Nak view kat web</Text>
      <Text>Hari ni dapat makanan apa?</Text>
      <Text>Test</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
