import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Questions(props) {
  return (
        <View>
          <Text style={styles.question}>{props.question}</Text>
          <TextInput
              style={styles.input}
          />
        </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    marginBottom: 30,
    elevation: 5,
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
  }
});