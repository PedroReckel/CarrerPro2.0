import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Presentation({ presentation }) {
  return (
    <View style={styles.presentationContainer}>
      <Text style={styles.presentationText}>{presentation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  presentationContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 15,
  },
  presentationText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff'
  },
});