import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import Presentation from '../../components/Presentation';

export default function RouterPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoCarrerPro}
        source={require('../../../assets/logoCarrerProMenor.png')}
      />
      <Header />
      <View style={styles.main}>
        <Presentation presentation={"Deseja fazer mais uma pergunta a IA?"} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* <Text style={styles.airesp}>{content}</Text> */}
        </ScrollView>
        <View style={styles.buttonArea}>
            <TouchableOpacity
                style={styles.positiveButton}
                onPress={() => navigation.navigate('Input')}
            >
                <Text style={styles.buttonText}>Sim</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.negativeButton}
                onPress={() => navigation.navigate('FinalPage')}
            >
                <Text style={styles.buttonText}>Não</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3496ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoCarrerPro: {
    marginBottom: -30,
  },
  main: {
    width: '90%',
    height: '71.8%',
    borderWidth: 2,
    marginTop: 25,
    backgroundColor: '#3496ff',
    borderRadius: 5,
    elevation: 5,
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  buttonArea: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  positiveButton: {
      width: '35%',
      backgroundColor: '#0e7114',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginRight: 25,
      borderRadius: 5,
      elevation: 5,
  },
  negativeButton: {
      width: '35%',
      backgroundColor: '#b41919',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      elevation: 5,
  },
  buttonText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
  },
  input: {
    width: '100%',
    minHeight: 100, // Altura mínima da caixa de texto
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    marginBottom: 30,
    elevation: 5,
  },
  airesp: {
    textAlign: 'center',
    color: '#555555',
  },
});
